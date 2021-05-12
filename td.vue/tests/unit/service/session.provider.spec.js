import session from '@/service/session.provider.js';

describe('service/session.provider.js', () => {
    describe('getDashboardActions', () => {

        describe('open existing', () => {
            let action;

            beforeEach(() => {
                action = session.getDashboardActions().find(x=> x.description.startsWith('Open'));
            });

            it('links to the tm select page', () => {
                expect(action.to).toEqual('/threatmodel-select');
            });

            it('uses the github icon', () => {
                expect(action.iconPreface).toEqual('fab');
                expect(action.icon).toEqual('vuejs');
            });
        });

        describe('new', () => {
            let action;

            beforeEach(() => {
                action = session.getDashboardActions().find(x=> x.description.startsWith('Create'));
            });

            xit('links to the repository page', () => {
                expect(action.to).toEqual('/repository');
            });

            it('uses the plus icon', () => {
                expect(action.icon).toEqual('plus');
            });
        });

        describe('download', () => {
            let action;

            beforeEach(() => {
                action = session.getDashboardActions().find(x=> x.description.startsWith('Download'));
            });

            xit('links to the home edit page', () => {
                expect(action.to).toEqual('/repository');
            });

            it('uses the cloud download icon', () => {
                expect(action.icon).toEqual('cloud-download-alt');
            });
        });
    });
});
