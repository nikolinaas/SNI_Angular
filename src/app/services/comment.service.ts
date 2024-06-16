import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private getUnApprovedCommentsURL: string = "http://localhost:9000/api/comments/notApproved";
  private getApprovedCommentsByThemeIdURL: string = "http://localhost:9000/api/comments/approved/";
  private getCommentByIdURL: string = "http://localhost:9000/api/comments/";
  private createCommentURL: string = "http://localhost:9000/api/comments"
  private editCommentURL: string = "http://localhost:9000/api/comments/"
  private approveCommentURL: string = "http://localhost:9000/api/comments/approveComment/";
  constructor(private http: HttpClient) { }

  getHeaders() {
    const token = sessionStorage.getItem("token");

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return headers;
  }

  getUnApprovedComments() {

    return this.http.get(this.getUnApprovedCommentsURL, { headers: this.getHeaders() });

  }

  approveComment(id: any, comment: any) {
    return this.http.put(this.approveCommentURL + id, comment, { observe: 'response', headers: this.getHeaders() });
  }

  getCommentById(id: any) {
    return this.http.get(this.getCommentByIdURL + id);
  }

  getApprovedCommentsByThemeId(id: any) {
    return this.http.get(this.getApprovedCommentsByThemeIdURL + id, { headers: this.getHeaders() });
  }

  createComment(comment: any) {

    return this.http.post(this.createCommentURL, comment, { observe: 'response', headers: this.getHeaders() });

  }

  editComment(id: any, comment: any) {
   return this.http.put(this.editCommentURL+id,comment,{ observe: 'response', headers: this.getHeaders() });
  }
  deleteComment(id:any){
    
  }
}
