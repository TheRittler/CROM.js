import {CompartmentType} from "crom_l1_composed/CompartmentType";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Part} from "crom_l1_composed/Part";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class PartBase
			extends BasicEObjectImpl
			implements Part
			{
				private _lower:number = 0;
				get lower():number{
					return this._lower;
				}
				set lower(value:number){
					this._lower = value; 
				}
				private _upper:number = 0;
				get upper():number{
					return this._upper;
				}
				set upper(value:number){
					this._upper = value; 
				}
				get whole():CompartmentType{
				
					if (this.eContainerFeatureID() != Crom_l1_composedPackageLiterals.PART__WHOLE) return null;
					return this.eInternalContainer() as CompartmentType;
				}
				set whole(value:CompartmentType) {
					if (value != this.eInternalContainer() as CompartmentType) {
						let msgs:NotificationChain = null;
						if (this.eInternalContainer() as CompartmentType != null){
							msgs = (this.eInternalContainer() as CompartmentType).eInverseRemove(this, Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__PARTS, /*Part*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__PARTS, /*Part*/ null, msgs);
						}
						msgs = this.basicSetWhole(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.PART__WHOLE , value, value));
					}
				}
				private _role:AbstractRole = null;
				get role():AbstractRole{
				
					return this._role;
				}
				set role(value:AbstractRole) {
					if (value != this._role) {
						let msgs:NotificationChain = null;
						if (this._role != null){
							msgs = (this._role).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.PART__ROLE, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.PART__ROLE, /*null*/ null, msgs);
						}
						msgs = this.basicSetRole(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.PART__ROLE , value, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return PartBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.PART__WHOLE:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetWhole(otherEnd as CompartmentType, msgs);
					}
					//return this.eInverseAddFromBasicEObjectImpl(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromPart = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.PART__WHOLE:
							return this.basicSetWhole(null, msgs);
					}
					//return this.eInverseRemoveFromBasicEObjectImpl(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromPart = this.eInverseRemove;
			
				public basicSetRole(newobj:AbstractRole, msgs:NotificationChain):NotificationChain {
					let oldobj = this._role;
					this._role = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.PART__ROLE, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetWhole(newobj:CompartmentType, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, Crom_l1_composedPackageLiterals.PART__WHOLE, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.PART__WHOLE:
							return this.whole;
						case Crom_l1_composedPackageLiterals.PART__LOWER:
							return this.lower;
						case Crom_l1_composedPackageLiterals.PART__UPPER:
							return this.upper;
						case Crom_l1_composedPackageLiterals.PART__ROLE:
							return this.role;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.PART__LOWER:
							this.lower = <number> newValue;
							return;
						case Crom_l1_composedPackageLiterals.PART__UPPER:
							this.upper = <number> newValue;
							return;
						case Crom_l1_composedPackageLiterals.PART__WHOLE:
							this.whole = <CompartmentType> newValue;
							return;
						case Crom_l1_composedPackageLiterals.PART__ROLE:
							this.role = <AbstractRole> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
