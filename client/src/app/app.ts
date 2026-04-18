import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost } from './services/blog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  posts = signal<BlogPost[]>([]);
  selectedPostId = signal<number | null>(null);
  isLoading = signal(true);
  errorMessage = signal('');

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe({
      next: (data) => {
        this.posts.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.errorMessage.set('Failed to load blog posts. Please try again later.');
        this.isLoading.set(false);
        console.error('Error fetching posts:', err);
      },
    });
  }

  togglePost(postId: number): void {
    if (this.selectedPostId() === postId) {
      this.selectedPostId.set(null);
    } else {
      this.selectedPostId.set(postId);
    }
  }

  isSelected(postId: number): boolean {
    return this.selectedPostId() === postId;
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
