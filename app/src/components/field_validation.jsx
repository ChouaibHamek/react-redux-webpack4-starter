import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';
import leftLabel from './left_label'

export default function semanticFormFieldLabel (field) {
  const { type='text', placeholder, labelRequired, label, icon, meta: { touched, error }, iconPosition='right' } = field
  const errorField = touched && error? 'error ': ''
  const errorPlaceholder = touched && error && field.placeholder? `${placeholder} ${error}`: placeholder

  return (
    <div className={`${errorField}field`} style={{marginBottom:10}}>
      {leftLabel(label, labelRequired)}
      <div className="ui input" >
        <div className={`ui fluid ${iconPosition} icon input`}>
          <input type={type} {...field.input} placeholder={errorPlaceholder}/>
          <i aria-hidden="true" className={`${icon} icon`}/>
        </div>
      </div>
      {touched && error && !field.placeholder && <Label style={{marginTop:6}} basic color="red" pointing>{error}</Label>}
    </div>
  )
}
