import {TypedElementImpl} from "crom_l1_composed/TypedElementImpl";
import {Type} from "crom_l1_composed/Type";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Attribute} from "crom_l1_composed/Attribute";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class AttributeBase
			extends TypedElementImpl
			implements Attribute
			{
				get owner():Type{
				
					if (this.eContainerFeatureID() != Crom_l1_composedPackageLiterals.ATTRIBUTE__OWNER) return null;
					return this.eInternalContainer() as Type;
				}
				set owner(value:Type) {
					if (value != this.eInternalContainer() as Type) {
						let msgs:NotificationChain = null;
						if (this.eInternalContainer() as Type != null){
							msgs = (this.eInternalContainer() as Type).eInverseRemove(this, Crom_l1_composedPackageLiterals.TYPE__ATTRIBUTES, /*Attribute*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, Crom_l1_composedPackageLiterals.TYPE__ATTRIBUTES, /*Attribute*/ null, msgs);
						}
						msgs = this.basicSetOwner(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.ATTRIBUTE__OWNER , value, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return AttributeBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.ATTRIBUTE__OWNER:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetOwner(otherEnd as Type, msgs);
					}
					//return this.eInverseAddFromTypedElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromAttribute = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.ATTRIBUTE__OWNER:
							return this.basicSetOwner(null, msgs);
					}
					//return this.eInverseRemoveFromTypedElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromAttribute = this.eInverseRemove;
			
				public basicSetOwner(newobj:Type, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, Crom_l1_composedPackageLiterals.ATTRIBUTE__OWNER, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.ATTRIBUTE__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.ATTRIBUTE__TYPE:
							return this.type;
						case Crom_l1_composedPackageLiterals.ATTRIBUTE__OWNER:
							return this.owner;
					}
					//return this.eGetFromTypedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.ATTRIBUTE__OWNER:
							this.owner = <Type> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
