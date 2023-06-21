<form method="POST" class="row g-3" action="/users" >

@csrf

    <div class="col-md-4">
      <label for="validationDefault01" class="form-label">First name</label>
      <input type="text" class="form-control" name="firstname"value="Mark" required>

      @error('name')
        <div class="alert alert-danger">Not valid</div>
        @enderror
    </div>


    <div class="col-md-4">
      <label for="validationDefault02" class="form-label">Last name</label>
      <input type="text" class="form-control" name="lastname" value="Otto" required>
      @error('lastname')
        <div class="alert alert-danger">Not valid</div>
        @enderror
    </div>

    <div class="col-md-4">
      <label for="validationDefaultUsername" class="form-label">Username</label>
      <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend2">@</span>
        <input type="text" class="form-control" name="username" aria-describedby="inputGroupPrepend2" required>
      </div>
        @error('username')
            <div class="alert alert-danger">Not valid</div>
            @enderror
    </div>

    <div class="col-md-6">
      <label for="validationDefault03" class="form-label">Email</label>
      <input type="email" class="form-control" name="email" required>
        @error('email')
            <div class="alert alert-danger">Not valid</div>
            @enderror
    </div>



    <div class="col-md-3">
      <label for="validationDefault05" class="form-label">Password</label>
      <input type="password" class="form-control" name="password" required>
        @error('password')
            <div class="alert alert-danger">Not valid</div>
            @enderror
    </div>

    <div class="col-md-3">
        <label for="validationDefault05" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" name="password_confirm" required>
          @error('password_confirm')
              <div class="alert alert-danger">Not valid</div>
              @enderror
      </div>


      <div class="col-md-3">
        <label for="validationDefault05" class="form-label">Age</label>
        <input type="text" class="form-control" name="age" required>
          @error('age')
              <div class="alert alert-danger">Not valid</div>
              @enderror
      </div>



      <div class="col-md-3">
        <label for="validationDefault05" class="form-label">Nationality</label>
        <input type="text" class="form-control" name="nationality" required>
          @error('nationality')
              <div class="alert alert-danger">Not valid</div>
              @enderror
      </div>

    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
        <label class="form-check-label" for="invalidCheck2">
          Agree to terms and conditions
        </label>
      </div>

    </div>

    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>


  </form>