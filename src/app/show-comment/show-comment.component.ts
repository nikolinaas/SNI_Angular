import { Component, Inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentService } from '../services/comment.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrl: './show-comment.component.css'
})
export class ShowCommentComponent {

  commentForm: any;
  selected: any;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService:AuthenticationService,private dialogRef: MatDialogRef<ShowCommentComponent>, private commentService: CommentService) {
    this.commentForm = new FormGroup({
      textComment: new FormControl()
    });
  }

  ngOnInit(){
    
    this.commentForm.get('textComment').value = this.data.text

  }

  onSubmit() {

    var commentEdited = {
      text: this.commentForm.get('textComment').value,
      date: this.data.date,
      approved:this.data.approved,
      userId: this.data.userId,
      themeId : this.data.themeId
    }

    this.commentService.editComment(this.data.id,commentEdited).subscribe(response =>{
      console.log(response);
      if(response.status==200){
        Swal.fire("Comment edited successfully!","","success");
      }else{
        Swal.fire("","Error while editing comment, try again later!","error");
      }
    })
  }

}
