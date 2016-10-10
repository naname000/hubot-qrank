'use strict';
const Helper = require('hubot-test-helper');
const chai = require('chai');

const expect = chai.expect;

const helper = new Helper('../src/hubot-qrank.js');

describe('qiitaのランキングを喋る', function() {
  let room;
  beforeEach(function() {
    room = helper.createRoom();
    return room;
  });
  afterEach(function() {
    return room.destroy();
  });

  it('qiitaの記事を20個喋る', function() {
    this.timeout(10000);
    return room.user.say('jone', '@hubot qrank').then(() => {
      expect(room.messages[1][1].split('http').length-1).to.equal(20);
    });
  });
});
