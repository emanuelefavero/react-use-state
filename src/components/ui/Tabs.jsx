import { cx } from '@/lib/utils';
import './Tabs.css';
import { Button } from './Button';

export const Tabs = ({ className, ...props }) => (
  <div className={cx('tabs', className)} {...props} />
);

export const TabsList = ({ className, ...props }) => (
  <div className={cx('tabs-list', className)} role='tablist' {...props} />
);

export const TabsTrigger = ({
  value,
  isActive,
  onValueChange,
  className,
  ...props
}) => (
  <Button
    variant={isActive ? Button.variant.warning : Button.variant.primary}
    className={cx('tabs-trigger', 'font-medium', className)}
    role='tab'
    id={`tab-${value}`}
    aria-selected={isActive}
    aria-controls={`panel-${value}`}
    onClick={() => onValueChange(value)}
    {...props}
  />
);

export const TabsContent = ({ value, className, ...props }) => {
  return (
    <div
      className={cx('tabs-content', className)}
      role='tabpanel'
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...props}
    />
  );
};

const TabsContentTitle = ({ className, ...props }) => (
  <h2
    className={cx('tabs-content-title', 'font-semibold', className)}
    {...props}
  />
);

const TabsContentDescription = ({ className, ...props }) => (
  <p
    className={cx('tabs-content-description', 'text-lg', className)}
    {...props}
  />
);

TabsContent.Title = TabsContentTitle;
TabsContent.Description = TabsContentDescription;
