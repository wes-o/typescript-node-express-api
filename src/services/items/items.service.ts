// TODO: use a class to define and encapsulate service logic for '../../items/items.ts'

import { Items } from "../../items/items";
import { Item } from "../../items/item.interface";

const items: Items = {
    1: {
        id: 1,
        name: "Burger",
        email: "test1@burger.org",
        description: "Tasty",
        image: ""
    },
    2: {
        id: 2,
        name: "Cheeseburger",
        email: "test2@burger.org",
        description: "Cheesy",
        image: ""
    },
    3: {
        id: 3,
        name: "Pickleburger",
        email: "test3@burger.org",
        description: "Sour",
        image: ""
    }
};

export const findAll = async (): Promise<Items> => {
    return items;
};

export const find = async (id: number): Promise<Item> => {
    const record: Item = items[id];

    if (record) {
        return record;
    }

    throw new Error("No burger found");
}; 

export const create = async (newItem: Item): Promise<void> => {
    const id = new Date().valueOf();
    items[id] = {
        ...newItem,
        id
    };
};

export const update = async (updatedItem: Item): Promise<void> => {
    if (items[updatedItem.id]) {
        items[updatedItem.id] = updatedItem;
        return;
    }

    throw new Error("No record found to update");
};

export const remove = async (id: number): Promise<void> => {
    const record: Item = items[id];

    if (record) {
        delete items[id];
        return;
    }

    throw new Error("No record found to delete");
};
