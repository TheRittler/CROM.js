import {TypedElementImpl} from "crom_l1_composed/TypedElementImpl";
import {Type} from "crom_l1_composed/Type";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Parameter} from "crom_l1_composed/Parameter";
import {Operation} from "crom_l1_composed/Operation";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class OperationBase
			extends TypedElementImpl
			implements Operation
			{
				private _operation:string = '';
				get operation():string{
					return this._operation;
				}
				set operation(value:string){
					this._operation = value; 
				}
				private _params:OrderedSet<Parameter> = null;
				
				get params():OrderedSet<Parameter>{
					if(this._params===null){
						this._params = new OrderedSet<Parameter>(this, Crom_l1_composedPackageLiterals.OPERATION__PARAMS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.OPERATION__PARAMS);
							
					}
					return this._params;
					
				}
				
				
				get owner():Type{
				
					if (this.eContainerFeatureID() != Crom_l1_composedPackageLiterals.OPERATION__OWNER) return null;
					return this.eInternalContainer() as Type;
				}
				set owner(value:Type) {
					if (value != this.eInternalContainer() as Type) {
						let msgs:NotificationChain = null;
						if (this.eInternalContainer() as Type != null){
							msgs = (this.eInternalContainer() as Type).eInverseRemove(this, Crom_l1_composedPackageLiterals.TYPE__OPERATIONS, /*Operation*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, Crom_l1_composedPackageLiterals.TYPE__OPERATIONS, /*Operation*/ null, msgs);
						}
						msgs = this.basicSetOwner(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.OPERATION__OWNER , value, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return OperationBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.OPERATION__OWNER:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetOwner(otherEnd as Type, msgs);
					}
					//return this.eInverseAddFromTypedElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromOperation = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.OPERATION__OWNER:
							return this.basicSetOwner(null, msgs);
					}
					//return this.eInverseRemoveFromTypedElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromOperation = this.eInverseRemove;
			
				public basicSetOwner(newobj:Type, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, Crom_l1_composedPackageLiterals.OPERATION__OWNER, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.OPERATION__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.OPERATION__TYPE:
							return this.type;
						case Crom_l1_composedPackageLiterals.OPERATION__PARAMS:
							return this.params;
						case Crom_l1_composedPackageLiterals.OPERATION__OPERATION:
							return this.operation;
						case Crom_l1_composedPackageLiterals.OPERATION__OWNER:
							return this.owner;
					}
					//return this.eGetFromTypedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.OPERATION__OPERATION:
							this.operation = <string> newValue;
							return;
						case Crom_l1_composedPackageLiterals.OPERATION__PARAMS:
							this.params.clear();
							this.params.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.OPERATION__OWNER:
							this.owner = <Type> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
