'use strict';
const Helper = require('hubot-test-helper');
const chai = require('chai');

const expect = chai.expect;

const helper = new Helper('../src/hubot-qiita.coffee');

describe('hubot-qiita', function() {
  beforeEach(function () {
    this.room = helper.createRoom();
  });
  afterEach(function () {
    this.room.destroy();
  });

  it('responds to hello', function() {
    this.room.user.say('alice', '@hubot hello').then(function () {
      expect(this.room.messages).to.eql(
        [
          ['alice', '@hubot hello'],
          ['hubot', '@alice hello!']
        ]
      );
    });
  });

  it('hears orly', function() {
    this.room.user.say('bob', 'just wanted to say orly').then(function () {
      expect(this.room.messages).to.eql(
        [
          ['bob', 'just wanted to say orly'],
          ['hubot', 'yarly']
        ]
      );
    });
  });
});
/*
describe 'hubot-qiita', ->
  beforeEach ->
    this.room = helper.createRoom()

  afterEach ->
    this.room.destroy()

  it 'responds to hello', ->
    this.room.user.say('alice', '@hubot hello').then =>
      expect(this.room.messages).to.eql [
        ['alice', '@hubot hello']
        ['hubot', '@alice hello!']
      ]

  it 'hears orly', ->
    this.room.user.say('bob', 'just wanted to say orly').then =>
      expect(this.room.messages).to.eql [
        ['bob', 'just wanted to say orly']
        ['hubot', 'yarly']
      ]
*/
