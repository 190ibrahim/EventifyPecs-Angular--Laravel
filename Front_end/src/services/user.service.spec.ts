// import { TestBed } from '@angular/core/testing';
// import { UserService } from './user.service';
// import { HttpClientModule } from '@angular/common/http';

// describe('UserService', () => {
//   let service: UserService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],  // add this line
//       providers: [UserService]     // and this line
//     });
//     service = TestBed.inject(UserService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { UserModel } from '../models/UserModel';



describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // replace HttpClientModule with HttpClientTestingModule
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();  // ensure that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve user data via GET request', () => {
    const dummyUser: UserModel = {
      name: 'Test User',
      dodate_of_birthb: '2000-01-01',
      email: 'testuser@example.com',
      lang: 'en',
      license_accepted: true,
      message: 'Test message',
      contact_number: '1234567890',
      nationality: 'Test Nationality',
      student_ID: 123,
      major_id: 456,
      state: 'success',
  };
  

    service.getUserData().subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const request = httpMock.expectOne('http://localhost:8000/api/login');
    expect(request.request.method).toBe('GET');
    request.flush(dummyUser);
  });
});
