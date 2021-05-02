'use strict';

const server = require('../server.js');
const test = require('supertest');
const testServer = test(server.app);

describe('Testing the SERVER dot APP ', () => {
    it('handle Home route', async () => {
        const homeTest = await testServer.get('/');
        expect(homeTest.status).toEqual(200);
    });
    it('handle error not found route', async () => {
        const notFoundTest = await testServer.get('/any');
        expect(notFoundTest.status).toEqual(404);
    });
    it('handle Bad-Requests route', async () => {
        const badReqTest = await testServer.get('/serverError');
        expect(badReqTest.status).toEqual(500);
    });
    it('handle about-route', async () => {
        const aboutTest = await testServer.get('/about');
        expect(aboutTest.status).toEqual(200);
    });

});