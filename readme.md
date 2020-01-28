## Usage

require the package

    const pick = require("@walls/object.pick");
    
Create a list of names to pick from the base object
   
    const list = ["id", "name", "invoice.deposit"];    
    const data = {
      id: 12, 
      name: "Test", 
      invoice: {deposit: 25}, 
      date: new Date(), 
      private: "info",
    };

Create a new object the desired values. Only the items in the list will get added to the final result.

	const result = pick(data, list);
	
the final result would be
	
	{
	  id: 12,
	  name: "Test",
	  invoice: {deposit: 25},
	}


> Written with [StackEdit](https://stackedit.io/).