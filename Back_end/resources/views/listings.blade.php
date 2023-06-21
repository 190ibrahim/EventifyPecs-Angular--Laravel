<h1>{{$heading}}</h1>
<h1>@foreach ($listings as $listing)</h1>
<h1> {{$listing['id']}};</h1>
<h2><a href="/lists/{{$listing['id']}}">{{$listing['name']}};</a></h2>
<p>{{$listing['description']}}</p>

 @endforeach

