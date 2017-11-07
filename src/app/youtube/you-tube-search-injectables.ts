import { YouTubeSearchService, YOUTUBE_API_KEY, YOUTUBE_API_URL } from "./youtube-search-service";

    //So that these can be injected in you tube service.
  export const youTubeSearchInjectables: Array<any> = [
    {provide: YouTubeSearchService, useClass: YouTubeSearchService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
  ];
  