<form method="POST" action="/login"></form>
@csrf

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