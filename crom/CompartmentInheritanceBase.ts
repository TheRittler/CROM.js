import {CompartmentType} from "crom_l1_composed/CompartmentType";
import {InheritanceImpl} from "crom_l1_composed/InheritanceImpl";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {CompartmentInheritance} from "crom_l1_composed/CompartmentInheritance";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class CompartmentInheritanceBase
			extends InheritanceImpl
			implements CompartmentInheritance
			{
				private _super:CompartmentType = null;
				get super():CompartmentType{
				
					return this._super;
				}
				set super(value:CompartmentType) {
					let oldvalue = this._super;
					this._super = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.COMPARTMENT_INHERITANCE__SUPER , oldvalue, value));
					}
				}
				private _sub:CompartmentType = null;
				get sub():CompartmentType{
				
					return this._sub;
				}
				set sub(value:CompartmentType) {
					let oldvalue = this._sub;
					this._sub = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.COMPARTMENT_INHERITANCE__SUB , oldvalue, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return CompartmentInheritanceBase.eStaticClass;
				}
			
			
				public basicSetSuper(newobj:CompartmentType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._super;
					this._super = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.COMPARTMENT_INHERITANCE__SUPER, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetSub(newobj:CompartmentType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._sub;
					this._sub = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.COMPARTMENT_INHERITANCE__SUB, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.COMPARTMENT_INHERITANCE__SUPER:
							return this.super;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_INHERITANCE__SUB:
							return this.sub;
					}
					//return this.eGetFromInheritance(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.COMPARTMENT_INHERITANCE__SUPER:
							this.super = <CompartmentType> newValue;
							return;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_INHERITANCE__SUB:
							this.sub = <CompartmentType> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
