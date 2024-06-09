import { v4 } from 'uuid';
import { faker } from '@faker-js/faker';

const generateItems = (type: string) => {
    const items = [];
    for (let i = 1; i <= 16; i++) {
        items.push({
            id: v4(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            date: faker.date.future().toLocaleDateString(),
            type: type,
            trending: i > 8 ? false : true,
            bookmarked: faker.datatype.boolean(),
        });
    }
    return items;
};

const featuredItems = generateItems('Featured');
const kpiItems = generateItems('KPI');
const layoutsItems = generateItems('Layouts');
const storyBoardsItems = generateItems('StoryBoards');

const allItems = [
    ...featuredItems,
    ...kpiItems,
    ...layoutsItems,
    ...storyBoardsItems,
];

console.log(JSON.stringify(allItems, null, 2));
