import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

function FaqAccordion({title,content}) {
  return (
    <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger className='lg:text-3xl text-xl font-thin no-underline'>{title}</AccordionTrigger>
                <AccordionContent className='text-xl font-thin'>
                {content}
                </AccordionContent>
                </AccordionItem>
            </Accordion>
  )
}

export default FaqAccordion
