import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemTypeService {
  selectedSchool = new BehaviorSubject(null);
  selectedType = new BehaviorSubject(null);
  selectedMenuType = new BehaviorSubject(null);
  selectedBook = new BehaviorSubject(null);
  selectedChapter = new BehaviorSubject(null);
  selectedTopic = new BehaviorSubject(null);
  selectedQuestion = new BehaviorSubject(null);
  selectedUser = new BehaviorSubject(null);
  constructor() { }

  setType(type: string) {
    this.selectedType.next(type);
    switch (type) {
      case 'book':
        this.selectedChapter.next(null);
        this.selectedTopic.next(null);
        break;
      case 'chapter':
        this.selectedTopic.next(null);
        break;
      case 'home':
        this.selectedBook.next(null);
        this.selectedChapter.next(null);
        break;
      case 'user':
        this.selectedBook.next(null);
        this.selectedChapter.next(null);
        this.selectedTopic.next(null);
        break;
      case 'none':
        this.selectedBook.next(null);
        this.selectedChapter.next(null);
        break;
      default:
        break;
    }
  }
  getType() {
    return this.selectedType;
  }
  setSelectedSchool(school) {
    this.selectedSchool.next(school);
  }
  getSelectedSchool() {
    return this.selectedSchool;
  }
  setMenuType(item) {
    this.selectedMenuType.next(item);
  }
  getMenuType() {
    return this.selectedMenuType;
  }
  setSelectedBook(book) {
    this.selectedBook.next(book);
  }
  getSelectedBook() {
    return this.selectedBook;
  }
  getSelectedBookValue() {
    return this.selectedBook.getValue();
  }
  setSelectedChapter(chapter) {
    this.selectedChapter.next(chapter);
  }
  getSelectedChapter() {
    return this.selectedChapter;
  }
  getSelectedChapterValue() {
    return this.selectedChapter.getValue();
  }
  setSelectedTopic(topic) {
    this.selectedTopic.next(topic);
  }
  getSelectedTopic() {
    return this.selectedTopic;
  }
  setSelectedQuestion(question) {
    this.selectedQuestion.next(question);
  }
  getSelectedQuestion() {
    return this.selectedQuestion;
  }

  // For User
  getSelectedUserValue() {
    return this.selectedUser.getValue();
  }
  getSelectedUser() {
    return this.selectedUser;
  }
  setSelectedUser(user) {
    this.selectedUser.next(user);
  }
}
