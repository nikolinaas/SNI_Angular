import { Component, Inject, Injector, ViewChild, afterNextRender, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentService } from '../services/comment.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css'
})
export class AddCommentComponent {

  commentForm : any;
  selected:any;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AddCommentComponent>, private commentService:CommentService) {
    this.commentForm = new FormGroup({
      code: new FormControl()
    });
  }

  onSubmit(){

  }

}
