

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    @auth
    

    <span>Welcome {{ Auth::user()->username }}</span>
    <a href="/logout"><button>Logout</button></a>
        
    @else
        
    
    
    <a href="/register"><button>Register</button></a>
    <a href="/login"><button>Login</button></a>
    
    
    
    @endauth
    




    @foreach ($announcements as $announcement) 
   
    
    <h1>{{ optional($announcement->user)->username ?? 'N/A' }} </h1>
    <h1>{{$announcement->user_id}}</h1>
        <h1>{{ $announcement->announcement_title }}</h1>
        <p>{{ $announcement->announcement_content }}</p>
    @endforeach

@auth
    <form method="POST" action="/announcements">
    @csrf

    
    <input type="text" name="announcement_title" placeholder="Title">
    @error('announcement_title')
        <div class="alert alert-danger">Not valid</div>
    @enderror
    <input type="text" name="announcement_content" placeholder="Content">
    @error('announcement_content')
        <div class="alert alert-danger">Not valid</div>
    @enderror
    <button type="submit">Submit</button>
    </form>
@endauth
</body>
</html>