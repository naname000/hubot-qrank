'use strict';
const Helper = require('hubot-test-helper');
const chai = require('chai');

const expect = chai.expect;

const helper = new Helper('../src/hubot-qiita.js');
//
/*
describe('test', function() {
  beforeEach(function() {
    return this.room = helper.createRoom();
  });
  afterEach(function() {
    return this.room.destroy();
  });
  it('responds to hello', function() {
    return this.room.user.say('alice', '@hubot hello').then((function(_this) {
      return function() {
        return expect(_this.room.messages).to.eql([['alice', '@hubot hello'], ['hubot', '@alice hello!']]);
      };
    })(this));
  });
  return it('hears orly', function() {
    return this.room.user.say('bob', 'just wanted to say orly').then((function(_this) {
      return function() {
        return expect(_this.room.messages).to.eql([['bob', 'just wanted to say orly'], ['hubot', 'yarly']]);
      };
    })(this));
  });
});
*/

describe('hubot-qiita', () => {
  beforeEach(() => {
    return this.room = helper.createRoom();
  });
  afterEach(() => {
    return this.room.destroy();
  });

  it('responds to hello', () => {
    return this.room.user.say('alice', '@hubot hello').then(() => {
      expect(this.room.messages).to.eql(
        [
          ['alice', '@hubot hello'],
          ['hubot', '@alice hello!']
        ]
      );
    });
  });

  it('hears orly', () => {
    return this.room.user.say('bob', 'just wanted to say orly').then(() => {
      expect(this.room.messages).to.eql(
        [
          ['bob', 'just wanted to say orly'],
          ['hubot', 'yarly']
        ]
      );
    });
  });
});
