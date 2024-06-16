import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { DatePipe } from '@angular/common';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShowCommentComponent } from '../show-comment/show-comment.component';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrl: './comments-view.component.css'
})
export class CommentsViewComponent {

searchForm:any;
  comments: any;
  themeId:any;
  banButtonVisible = false;
  deleteAvailable :boolean = false;
  addAvailable :boolean = false;
  editAvailable :boolean = false;
  usersId :any;

  constructor(private datePipe: DatePipe,private commentService: CommentService, private route:ActivatedRoute, private authService:AuthenticationService, public dialogRef: MatDialogRef<AddCommentComponent>, private dialog: MatDialog, private userService:UserService ) {
    this.searchForm = new FormGroup({
      searchText: new FormControl()
    });
  }

  loadComments(id:any){
    this.commentService.getApprovedCommentsByThemeId(id).subscribe(resp => {
      this.comments = resp;
      console.log(resp);
    });
  }
  ngOnInit() {
this.usersId = this.authService.getId();
    var role = this.authService.getRole();
    if(role=="ADMIN" || role=="MODERATOR"){
      this.banButtonVisible = true;
    }


this.userService.getUserById(this.usersId).subscribe(resp => {
  if ((resp as any).permissions?.find((e: { permissionName: any; }) => e.permissionName === "ADD")){
    this.addAvailable = true;
    
  }
  if ((resp as any).permissions?.find((e: { permissionName: any; }) => e.permissionName === "EDIT")){
    this.editAvailable = true;
  }
  if ((resp as any).permissions?.find((e: { permissionName: any; }) => e.permissionName === "DELETE")){
    this.deleteAvailable = true;
  }
})

     this.themeId = this.route.snapshot.paramMap.get('id');
    this.loadComments(this.themeId);


  }
  deleteComment(){
      this.deleteComment();
  }

  searchButton(){

    var commentsToShow:any = [];
    
    var tetxForSeacrh = this.searchForm.get('searchText').value;

    this.comments.forEach((element: any) => {
      if(element.userByUserIdName.includes(tetxForSeacrh) || element.text.includes(tetxForSeacrh) || element.userByUserIdSurname.includes(tetxForSeacrh)){
        commentsToShow.push(element);
      }

      if(commentsToShow.length){
      this.comments = commentsToShow;
    }
    else{
      this.comments = this.loadComments(this.themeId);
      Swal.fire("There are no comments that match your search!","","info")
    }
    });


  }

  banComment(comment:any){
    var editedComment = {
      text: comment.text,
      date: comment.date,
      approved:false,
      userId: comment.userId,
      themeId : comment.themeId
    }
    this.commentService.editComment(comment.id,editedComment).subscribe(response => {
      if(response.status==200){
        Swal.fire("Comment is successfuly baned!","","success");
        var themeId = this.route.snapshot.paramMap.get('id');
    this.loadComments(themeId);
      }
    })
  }
  transform(arg0: any,arg1: string) {
   return this.datePipe.transform(arg0,arg1);
    }

    showComment(comment:any){
      if(this.editAvailable && comment.userId==this.usersId){

        this.dialog.open(ShowCommentComponent,{data:comment});
      }else { 
        Swal.fire("Not available!","Your account doesn't have permission for comment editing!","warning");
      }
    }
  

    addComment(){
      this.dialog.open(AddCommentComponent);
    }
}
