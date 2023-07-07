import Accordian from '@/common/Accordian';
import SectionBorder from '@/common/SectionBorder';
import { TableOfContents } from '@/types/post';

export default function ContentsTable({
  tableOfContents,
  className,
}: {
  tableOfContents: TableOfContents;
  className?: string;
}) {
  if (tableOfContents.length === 0) {
    return <></>;
  }

  const ContentsHeader = () => (
    <h2 className="my-0" id="table-of-contents">
      Table of contents
    </h2>
  );

  return (
    <div className={className}>
      <Accordian header={<ContentsHeader />} maxHeight={170}>
        <ul>
          {tableOfContents.map((section) => (
            <li key={section.slug}>
              <a href={`#${section.slug}`}>{section.text}</a>
              <ul>
                {section.subSections.map((subSection) => (
                  <li key={subSection.slug}>
                    <a href={`#${subSection.slug}`}>{subSection.text}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Accordian>
      <SectionBorder />
    </div>
  );
}
