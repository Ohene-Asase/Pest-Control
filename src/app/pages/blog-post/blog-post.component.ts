import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'blog-post',
  templateUrl: 'blog-post.component.html',
  styleUrls: ['blog-post.component.css'],
})
export class BlogPost {
  raw9y0t: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('BlogPost - Notus Pro2')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'BlogPost - Notus Pro2',
      },
    ])
  }
}
