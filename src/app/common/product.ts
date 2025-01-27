export class Product {
//add properties to this class, must match actual json data from the spring boot service

public sku: string;
public name: string;
public description: string;
public unitPrice: number;
public imageUrl: string;
public active: boolean;
public unitsInStock: number;
public dateCreated: Date;
public lastUpdated: Date;

constructor(sku: string, name: string, description: string, unitPrice: number, imageUrl: string, active: boolean, unitsInStock: number, dateCreated: Date, lastUpdated: Date) {
	this.sku = sku;
	this.name = name;
	this.description = description;
	this.unitPrice = unitPrice;
	this.imageUrl = imageUrl;
	this.active = active;
	this.unitsInStock = unitsInStock;
	this.dateCreated = dateCreated;
	this.lastUpdated = lastUpdated;
}
}
