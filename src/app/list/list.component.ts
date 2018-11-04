import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import {Post, Query } from '../types';
import { resultKeyNameFromField } from 'apollo-utilities';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    posts: Observable<Post[]>;
    constructor(private apollo: Apollo) {}
  
    ngOnInit() {
      this.posts = this.apollo.watchQuery<Query>({
        query: gql`
        query {
          allPosts {
            id
            title
            createdAt
            user {
              name
            }
          }
        }  
        `,
      })
        .valueChanges
        .pipe(
          map(result => ( result.data.allPosts )
        ));
    }
}
