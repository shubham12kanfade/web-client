import { apiUrl } from '../../configuration/api';

export class ApiConfiguration {

  protected baseUrl: string = apiUrl;

  // Authorization
  readonly authUrl = 'authentication/';

  // User
  readonly usersUrl = 'users';
  readonly userRenewTokenUrl = this.usersUrl + '/renewtoken';

  readonly products = 'products';
  readonly Offers = 'offers';





  // Geo
  readonly geoUrl = 'geo/';
  readonly countryUrl = this.geoUrl + 'countries';
  readonly stateUrl = this.geoUrl + 'states';
  readonly cityUrl = this.geoUrl + 'cities';

  // school
  readonly schoolUrl = 'schools';
  // configure
  readonly configureUrl = 'configure/';
  // book
  readonly bookUrl = 'books';

  // uploads
  readonly uploadUrl = 'uploads/';

  // For Session
  readonly sessionUrl = 'sessions/';

  // Question Answer
  readonly questionAnswerListUrl = ((chapterId, label) => {
    return this.chapterUrl + '/' + chapterId + '/label/' + label + '/questionanswers/';
  });

  readonly contentLibraryUrl = 'contentlibrary/';
  readonly teachingAidsUrl = 'teachingaids/';
  readonly bookChapterUrl = 'bookchapters/';
  readonly bookTopicUrl = 'booktopics/';
  // Lesson Plan
  readonly lessonPlanUrl = 'lessonplans/';

  readonly verifyOTPUrl = this.authUrl + 'otp/verify';
  readonly questionAnswerUrl = 'questionanswers/';
  readonly studentQaUrl = this.questionAnswerUrl + 'student/';
  readonly teacherQAUrl = this.questionAnswerUrl + 'teacher/';

  readonly studentQAListUrl = (chapterId, topicId, type) => {
    return this.studentQaUrl + 'chapters/' + chapterId + '/topics/' + topicId + '/types/' + type;
  }
  // teacher question answer
  readonly teacherQAListUrl = (lessonPlanId, category) => {
    return this.teacherQAUrl + 'lessonplans/' + lessonPlanId + '/categories/' + category;
  }
  readonly contentLibraryTeachingAidUrl = (topicId) => {
    return this.teachingAidsUrl + 'topic/' + topicId;
  }
  readonly verifyMobileNoUrl = (mobileNo) => {
    return this.authUrl + 'check/mobile/' + mobileNo;
  }
  readonly sendOTPUrl = (mobileNo) => {
    return this.authUrl + 'otp/' + mobileNo;
  }
  readonly chapterUrl = (bookId) => {
    return this.bookChapterUrl + this.bookUrl + '/' + bookId;
  }
  readonly topicUrl = (chapterId) => {
    return this.bookTopicUrl + 'chapters/' + chapterId;
  }
  readonly topicByIdUrl = (topicId) => {
    return this.bookTopicUrl + topicId;
  }
  readonly topicLessonPlanUrl = (topicId) => {
    return this.lessonPlanUrl + 'topics/' + topicId;
  }
  readonly updateUserUrl = (userId) => {
    return this.usersUrl + '/' + userId;
  }
  readonly deleteUserUrl = (userId) => {
    return this.usersUrl + '/' + userId;
  }
  readonly checkMobileExistUrl = (mobile) => {
    return this.usersUrl + '/mobile/' + mobile + '/exist';
  }

  // Session
  // tslint:disable-next-line:member-ordering
  readonly sessions = 'sessions';

  // school admin student management
  // tslint:disable-next-line:member-ordering
  readonly studentUrl = this.usersUrl + '/student/';

  readonly sessionByIdUrl = (sessionId: string) => {
    return this.sessionUrl + sessionId;
  }
  readonly classesBy = (schoolId: string) => {
    return 'academics/classes/school/' + schoolId;
  }
  readonly sectionsBy = (classId: string) => {
    return 'academics/sections/classes/' + classId;
  }

  readonly getStudentsBy = (sessionId: string, classId: string, sectionId: string) => {
    return this.usersUrl + '/student/session/' + sessionId + '/' + 'class/' + classId + '/section/' + sectionId;
  }
  readonly getStudentBy = (studentId: string) => {
    return this.usersUrl + '/student/' + studentId;
  }
  readonly getUserUrlBy = (studentId: string) => {
    return this.usersUrl + '/' + studentId;
  }

  // geo
  readonly getStatesBy = (countryId: string) => {
    return this.stateUrl + '/' + countryId;
  }
  readonly getCitiesBy = (stateId: string) => {
    return this.cityUrl + '/' + stateId;
  }

  // Chapter
  readonly chapterByIdUrl = (chapterId) => {
    return this.bookChapterUrl + chapterId;
  }
  // book import
  // readonly bookImportUrl=(bookId)
}
