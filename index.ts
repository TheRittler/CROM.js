import { Crom_l1_composedFactoryImpl } from 'crom_l1_composed/Crom_l1_composedFactoryImpl';


let factory = Crom_l1_composedFactoryImpl.eINSTANCE
let compartment = factory.createCompartmentType()
console.log(compartment)

let type = factory.createNaturalType()
let op  = factory.createOperation()
op.name = "doSth"
op.type = compartment
type.operations.add(op)
console.log(type)