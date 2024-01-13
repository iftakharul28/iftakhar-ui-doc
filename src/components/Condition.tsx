import { Switch } from '@iftakhar/ui';
export default function Condition() {
  return (
    <Switch>
      <Switch.Case condition={true}>
        <span>If this condition is true, then it will show</span>
      </Switch.Case>
      <Switch.Case condition={false}>
        <span>If this condition is false, then it will not show</span>
      </Switch.Case>
      <Switch.Default>
        <span>If the other two conditions are false, then this will show</span>
      </Switch.Default>
    </Switch>
  )
}
