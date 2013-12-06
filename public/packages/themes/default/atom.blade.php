{{ '<?xml version="1.0"?>' }}
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ e(site_title()) }}</title>
    <link>{{ wardrobe_url('/') }}</link>
    <atom:link href="{{ wardrobe_url('rss') }}" rel="self" type="application/rss+xml" />
    <description></description>
    <copyright>{{ wardrobe_url('/') }}</copyright>
    <ttl>30</ttl>

    @foreach ($posts as $post)
      <item>
        <title>{{ $post->title }}</title>
        <description>
          {{ htmlspecialchars($post->parsed_content) }}
        </description>
        <link>{{ wardrobe_url('post/'.$post->slug) }}</link>
        <guid isPermaLink="true">{{ wardrobe_url('post/'.$post->slug) }}</guid>
        <pubDate>{{ $post->rss_date }}</pubDate>
      </item>
    @endforeach
  </channel>
</rss>
