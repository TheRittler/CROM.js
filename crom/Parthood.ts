    export class Parthood
    {
    	
		public static readonly UNCONSTRAINED_VALUE:number = 0;
		public static readonly EXCLUSIVEPART_VALUE:number = 1;
		public static readonly SHARABLEPART_VALUE:number = 2;
		public static readonly ESSENTIALPART_VALUE:number = 3;
		public static readonly MANDATORYPART_VALUE:number = 4;
		public static readonly INSEPARABLEPART_VALUE:number = 5;
		
		public static UNCONSTRAINED:Parthood = new Parthood(0, "Unconstrained", "Unconstrained");
		public static EXCLUSIVEPART:Parthood = new Parthood(1, "ExclusivePart", "ExclusivePart");
		public static SHARABLEPART:Parthood = new Parthood(2, "SharablePart", "SharablePart");
		public static ESSENTIALPART:Parthood = new Parthood(3, "EssentialPart", "EssentialPart");
		public static MANDATORYPART:Parthood = new Parthood(4, "MandatoryPart", "MandatoryPart");
		public static INSEPARABLEPART:Parthood = new Parthood(5, "InseparablePart", "InseparablePart");

		private static VALUES_ARRAY:Array<Parthood> = [
			Parthood.UNCONSTRAINED, 
			Parthood.EXCLUSIVEPART, 
			Parthood.SHARABLEPART, 
			Parthood.ESSENTIALPART, 
			Parthood.MANDATORYPART, 
			Parthood.INSEPARABLEPART
		];

        public static get_string(literal:string):Parthood
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

        public static getByName(name:string):Parthood
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

        public static get_number(value:number):Parthood
        {
            switch (value)
            {
			case this.UNCONSTRAINED_VALUE: return this.UNCONSTRAINED;
			case this.EXCLUSIVEPART_VALUE: return this.EXCLUSIVEPART;
			case this.SHARABLEPART_VALUE: return this.SHARABLEPART;
			case this.ESSENTIALPART_VALUE: return this.ESSENTIALPART;
			case this.MANDATORYPART_VALUE: return this.MANDATORYPART;
			case this.INSEPARABLEPART_VALUE: return this.INSEPARABLEPART;
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
