import { expect } from 'chai';
import { ServerRMQ } from '../lib/server';
import * as sinon from 'sinon';

const server = new ServerRMQ({});

describe('listen()', () => {

    beforeEach(() => {
        (server as any).start = sinon.spy();
    });

    it('should call start', () => {
        server.listen();
        expect((server as any).start.called).to.be.true;
    });
});

describe('close()', () => {
    beforeEach(() => {
        (server as any).channel = {
            close: sinon.spy()
        };
        (server as any).server = {
            close: sinon.spy()
        };
    });

    it('should close channel', () => {
        server.close();
        expect((server as any).channel.close.called).to.be.true;
    });

    it('should close server', () => {
        server.close();
        expect((server as any).server.close.called).to.be.true;
    });
});

describe('start()', () => {

});
