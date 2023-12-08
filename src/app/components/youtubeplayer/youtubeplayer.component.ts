import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-youtubeplayer',
  templateUrl: './youtubeplayer.component.html',
  styleUrls: ['./youtubeplayer.component.css']
})
export class YoutubeplayerComponent {
  @Input() videoId: string | undefined;

  videoUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    if (this.videoId) {
      const videoUrl = `https://www.youtube.com/embed/${this.videoId}`;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    }
  }
}
