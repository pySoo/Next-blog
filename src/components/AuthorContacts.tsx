import React from 'react';

import { siteConfig } from '@/constants/config';
import { $ } from '@/libs/core';

import LinkExternal from '../common/LinkExternal';
import ContactsIcon from './ContactsIcon';

export default function AuthorContacts({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={$('flex space-x-2', className)}>
      {Object.keys(siteConfig.author.contacts).map((sns) => {
        let contact =
          siteConfig.author.contacts[
            sns as keyof typeof siteConfig.author.contacts
          ];

        if (sns === 'email') contact = `mailto:${contact}`;
        else if (sns === 'github') contact = `https://github.com/${contact}`;
        else if (sns === 'velog') contact = `https://velog.io/${contact}`;

        return !contact ? null : (
          <LinkExternal key={sns} href={contact}>
            <ContactsIcon contact={sns} />
          </LinkExternal>
        );
      })}
    </div>
  );
}
