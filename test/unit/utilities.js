var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){
    // var testTodo = todo.setup();
    it('should have all the necessary methods', function (done){
    expect(todo.util).to.have.property('trimTodoName');
    todo.util.should.have.property('isValidTodoName');
    done();
    });
  });
});

describe('the todo.util methods', function() {
  it('should replace whitespace in the todo name', function (done) {
    var trimmed = todo.util.trimTodoName(' buy shampoo ');
    assert.equal(trimmed, 'buy shampoo');
    expect(trimmed).to.not.equal('buyshampoo');
    trimmed.should.be.a('string');

    var trim = todo.util.trimTodoName(' hi mom');
    trim.should.have.length(6);
    done();
  });

  it('should validate todo name', function (done) {
    var isValid = todo.util.isValidTodoName('hello world');
    assert.typeOf(isValid, 'boolean');
    expect(isValid).to.not.equal(false);
    done();
  });

  it('should return correct id', function (done) {
    var uniqId = todo.util.getUniqueId();
    assert.typeOf(uniqId, 'Number');
    expect(uniqId).to.equal(1);
    var uniqIdToo = todo.util.getUniqueId();
    assert.equal(uniqIdToo, 2);
    done();
  });
});
