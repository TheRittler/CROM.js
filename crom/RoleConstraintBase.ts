import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {ConstraintImpl} from "crom_l1_composed/ConstraintImpl";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {RoleConstraint} from "crom_l1_composed/RoleConstraint";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class RoleConstraintBase
			extends ConstraintImpl
			implements RoleConstraint
			{
				private _first:AbstractRole = null;
				get first():AbstractRole{
				
					return this._first;
				}
				set first(value:AbstractRole) {
					let oldvalue = this._first;
					this._first = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.ROLE_CONSTRAINT__FIRST , oldvalue, value));
					}
				}
				private _second:AbstractRole = null;
				get second():AbstractRole{
				
					return this._second;
				}
				set second(value:AbstractRole) {
					let oldvalue = this._second;
					this._second = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.ROLE_CONSTRAINT__SECOND , oldvalue, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RoleConstraintBase.eStaticClass;
				}
			
			
				public basicSetFirst(newobj:AbstractRole, msgs:NotificationChain):NotificationChain {
					let oldobj = this._first;
					this._first = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.ROLE_CONSTRAINT__FIRST, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetSecond(newobj:AbstractRole, msgs:NotificationChain):NotificationChain {
					let oldobj = this._second;
					this._second = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.ROLE_CONSTRAINT__SECOND, oldobj, newobj);
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
						case Crom_l1_composedPackageLiterals.ROLE_CONSTRAINT__FIRST:
							return this.first;
						case Crom_l1_composedPackageLiterals.ROLE_CONSTRAINT__SECOND:
							return this.second;
					}
					//return this.eGetFromConstraint(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.ROLE_CONSTRAINT__FIRST:
							this.first = <AbstractRole> newValue;
							return;
						case Crom_l1_composedPackageLiterals.ROLE_CONSTRAINT__SECOND:
							this.second = <AbstractRole> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
