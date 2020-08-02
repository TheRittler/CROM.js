    export class Direction
    {
    	
		public static readonly UNDIRECTED_VALUE:number = 0;
		public static readonly FIRSTTOSECOND_VALUE:number = 1;
		public static readonly SECONDTOFIRST_VALUE:number = 2;
		
		public static UNDIRECTED:Direction = new Direction(0, "Undirected", "Undirected");
		public static FIRSTTOSECOND:Direction = new Direction(1, "FirstToSecond", "FirstToSecond");
		public static SECONDTOFIRST:Direction = new Direction(2, "SecondToFirst", "SecondToFirst");

		private static VALUES_ARRAY:Array<Direction> = [
			Direction.UNDIRECTED, 
			Direction.FIRSTTOSECOND, 
			Direction.SECONDTOFIRST
		];

        public static get_string(literal:string):Direction
        {
            for (let i = 0; i < this.VALUES_ARRAY.length; i++)
            {
                let result = this.VALUES_ARRAY[i];
                if (result.toString() === literal)
                {
                    return result;
                }
            }
            return null;
        }

        public static getByName(name:string):Direction
        {
	        for (let i = 0; i < this.VALUES_ARRAY.length; i++)
	        {
	            let result = this.VALUES_ARRAY[i];
	            if (result.getName()==name)
	            {
	                return result;
	            }
	        }
	        return null;
        }

        public static get_number(value:number):Direction
        {
            switch (value)
            {
			case this.UNDIRECTED_VALUE: return this.UNDIRECTED;
			case this.FIRSTTOSECOND_VALUE: return this.FIRSTTOSECOND;
			case this.SECONDTOFIRST_VALUE: return this.SECONDTOFIRST;
            }
            return null;
        }

	    private value:number;
	    private name:string;
	    private literal:string;

	    private constructor(value:number, name:string, literal:string)
	    {
	        this.value = value;
	        this.name = name;
	        this.literal = literal;
	    }
	
	    public getLiteral():string
	    {
	        return this.literal;
	    }
	
	    public getName():string
	    {
	        return this.name;
	    }
	
	    public getValue():number
	    {
	        return this.value;
	    }
	    
	    public toString():string
	    {
	        return this.literal;
	    }
    }
