import SectionBorder from '@/common/SectionBorder';
import { TableOfContents } from '@/types/post';

export default function ContentsTable({
  tableOfContents,
  className,
  onlyTitle = false,
}: {
  tableOfContents: TableOfContents;
  className?: string;
  onlyTitle?: boolean;
}) {
  if (tableOfContents.length === 0) {
    return <></>;
  }

  return (
    <div className={className}>
      <h2 className="my-0" id="table-of-contents">
        Table of contents
      </h2>
      <ul>
        {tableOfContents.map((section) => (
          <li key={section.slug}>
            <a href={`#${section.slug}`}>{section.text}</a>
            {!onlyTitle && (
              <ul>
                {section.subSections.map((subSection) => (
                  <li key={subSection.slug}>
                    <a href={`#${subSection.slug}`}>{subSection.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <SectionBorder />
    </div>
  );
}
