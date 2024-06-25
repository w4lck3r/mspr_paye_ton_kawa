const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const mongoose = require('mongoose');
const Product = require('../src/models/productModel');

chai.should();
chai.use(chaiHttp);

describe('Inventory API', () => {
  before((done) => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, done);
  });

  after((done) => {
    mongoose.connection.close(done);
  });

  describe('GET /api/products', () => {
    it('should get all products', (done) => {
      chai.request(server)
        .get('/api/products')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('POST /api/products', () => {
    it('should create a new product', (done) => {
      const product = {
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        stock: 50
      };
      chai.request(server)
        .post('/api/products')
        .send(product)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql('Product 1');
          done();
        });
    });
  });

  describe('PATCH /api/products/:id', () => {
    it('should update a product', (done) => {
      const productId = '5f5c1234567b2a3e23456789';
      const updatedProduct = {
        name: 'Updated Product',
        description: 'Updated Description',
        price: 150,
        stock: 75
      };
      chai.request(server)
        .patch(`/api/products/${productId}`)
        .send(updatedProduct)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql('Updated Product');
          done();
        });
    });
  });

  describe('DELETE /api/products/:id', () => {
    it('should delete a product', (done) => {
      const productId = '5f5c1234567b2a3e23456789';
      chai.request(server)
        .delete(`/api/products/${productId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Product deleted');
          done();
        });
    });
  });

});
