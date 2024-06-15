import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrl: './comments-view.component.css'
})
export class CommentsViewComponent {


  comments: any;
  banButtonVisible = false;
  constructor(private datePipe: DatePipe,private commentService: CommentService, private route:ActivatedRoute, private authService:AuthenticationService) {

  }

  loadComments(id:any){
    this.commentService.getApprovedCommentsByThemeId(id).subscribe(resp => {
      this.comments = resp;
      console.log(resp);
    });
  }
  ngOnInit() {

    var role = this.authService.getRole();
    if(role=="ADMIN" || role=="MODERATOR"){
      this.banButtonVisible = true;
    }


    var themeId = this.route.snapshot.paramMap.get('id');
    this.loadComments(themeId);


  }

  transform(arg0: any,arg1: string) {
   return this.datePipe.transform(arg0,arg1);
    }
}
