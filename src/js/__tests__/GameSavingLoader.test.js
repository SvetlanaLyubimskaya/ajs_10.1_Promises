import GameSavingLoader from '../GameSavingLoader';

test('test_1', () => {
    const result = {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000,
        },
    };

    expect(GameSavingLoader.load()).toEqual(result);
    
});
