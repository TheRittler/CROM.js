import {Type} from "crom_l1_composed/Type";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Attribute} from "crom_l1_composed/Attribute";
import {Operation} from "crom_l1_composed/Operation";
import {RelationTargetImpl} from "crom_l1_composed/RelationTargetImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class TypeBase
			extends RelationTargetImpl
			implements Type
			{
				private _attributes:OrderedSet<Attribute> = null;
				
				get attributes():OrderedSet<Attribute>{
					if(this._attributes===null){
						this._attributes = new OrderedSet<Attribute>(this, Crom_l1_composedPackageLiterals.TYPE__ATTRIBUTES, Crom_l1_composedPackageLiterals.ATTRIBUTE__OWNER);
							
					}
					return this._attributes;
					
				}
				
				
				private _operations:OrderedSet<Operation> = null;
				
				get operations():OrderedSet<Operation>{
					if(this._operations===null){
						this._operations = new OrderedSet<Operation>(this, Crom_l1_composedPackageLiterals.TYPE__OPERATIONS, Crom_l1_composedPackageLiterals.OPERATION__OWNER);
							
					}
					return this._operations;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return TypeBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.TYPE__ATTRIBUTES:
							return this.attributes.basicAdd(otherEnd as Attribute, msgs);
						case Crom_l1_composedPackageLiterals.TYPE__OPERATIONS:
							return this.operations.basicAdd(otherEnd as Operation, msgs);
					}
					//return this.eInverseAddFromRelationTarget(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromType = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.TYPE__ATTRIBUTES:
							return this.attributes.basicRemove(otherEnd as Attribute, msgs);
						case Crom_l1_composedPackageLiterals.TYPE__OPERATIONS:
							return this.operations.basicRemove(otherEnd as Operation, msgs);
					}
					//return this.eInverseRemoveFromRelationTarget(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromType = this.eInverseRemove;
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.TYPE__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.TYPE__INCOMING:
							return this.incoming;
						case Crom_l1_composedPackageLiterals.TYPE__OUTGOING:
							return this.outgoing;
						case Crom_l1_composedPackageLiterals.TYPE__ATTRIBUTES:
							return this.attributes;
						case Crom_l1_composedPackageLiterals.TYPE__OPERATIONS:
							return this.operations;
					}
					//return this.eGetFromRelationTarget(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.TYPE__ATTRIBUTES:
							this.attributes.clear();
							this.attributes.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.TYPE__OPERATIONS:
							this.operations.clear();
							this.operations.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
