import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ShowCommentComponent } from '../show-comment/show-comment.component';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-new-comments',
  templateUrl: './new-comments.component.html',
  styleUrl: './new-comments.component.css'
})
export class NewCommentsComponent {

  comments: any;

  constructor(private commentService: CommentService, private authService:AuthenticationService, private dialog: MatDialog, private router: Router) {

  }

  loadComments() {
    this.commentService.getUnApprovedComments().subscribe(resp => {
      this.comments = resp;
      console.log(resp);
    });
  }
  ngOnInit() {
    this.loadComments();


  }

  approveComment(comment: any) {

    var editedComment = {

      "id": comment.id,
      "text": comment.text,
      "date": comment.date,
      "approved": true,
      "userId": comment.userId,
      "themeId": comment.themeId

    }

    this.commentService.approveComment(comment.id, editedComment).subscribe(response => {
      console.log(response);
      if (response.status == 200) {
        Swal.fire("Comment approved", " ", "success");
        this.loadComments();
      }
    }, (err => {
      if (err.status == 400) {
        this.router.navigate(['forbidden']);
        this.authService.logout();
      }
    }));


  }
  showComment(comment: any) {
    this.dialog.open(ShowCommentComponent, { data: comment });
  }
}
