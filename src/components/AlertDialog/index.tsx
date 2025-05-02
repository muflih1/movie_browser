import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import React from 'react';
import clsx from 'clsx';

function Portal({ children }: React.PropsWithChildren) {
  return createPortal(children, document.body);
}

function AlertDialog({
  children,
  open,
}: React.PropsWithChildren<{ open: boolean }>) {
  return open ? (
    <Portal>
      <div className={styles.root}>
        <div className={styles.mask} />
        <div role='dialog' className={styles.dialog}>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
}

function AlertDialogTitle({ children }: React.PropsWithChildren) {
  return <h2 className={styles.title}>{children}</h2>;
}

function AlertDialogMessage({ children }: React.PropsWithChildren) {
  return <p>{children}</p>;
}

function AlertDialogFooter({ children }: React.PropsWithChildren) {
  return <div className={styles.footer}>{children}</div>;
}

function AlertDialogActionButton({
  onPress,
  children,
  type = 'primary',
}: React.PropsWithChildren<{
  onPress: React.MouseEventHandler<HTMLButtonElement>;
  type: 'secondary' | 'primary';
}>) {
  return (
    <button
      type='button'
      className={clsx('btn', styles[type])}
      onClick={onPress}
    >
      {children}
    </button>
  );
}

const Root = AlertDialog;
const Title = AlertDialogTitle;
const Message = AlertDialogMessage;
const Footer = AlertDialogFooter;
const Button = AlertDialogActionButton;

export { Root, Title, Message, Footer, Button };
