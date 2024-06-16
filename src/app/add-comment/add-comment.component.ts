import { Component, Inject, Injector, ViewChild, afterNextRender, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentService } from '../services/comment.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { AuthenticationService } from '../services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css'
})
export class AddCommentComponent {

  commentForm: any;
  selected: any;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService:AuthenticationService,private dialogRef: MatDialogRef<AddCommentComponent>, private commentService: CommentService) {
    this.commentForm = new FormGroup({
      textComment: new FormControl()
    });
  }

  onSubmit() {

    var commentNew = {
      text: this.commentForm.get('textComment').value,
      date: new Date(),
      approved:false,
      userId: this.authService.getId(),
      themeId : this.selected
    }

    this.commentService.createComment(commentNew).subscribe(response =>{
      console.log(response);
      if(response.status==201){
        Swal.fire("Comment created successfully!","We received your comment request, your comment will be published after moderator approval!","success");
      }else{
        Swal.fire("","Error while creating new comment, try again later!","error");
      }
    })
  }

}
