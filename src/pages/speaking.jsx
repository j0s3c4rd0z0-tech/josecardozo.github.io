import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
		<Head>
		  <title>Speaking - Jose Cardozo</title>
		  <meta
			name="description"
			content="Software engineer, infrastructure specialist, and technical speaker focused on real-world systems, automation, and sustainable technology."
		  />
		</Head>

		<SimpleLayout
		  title="Sharing knowledge, experience, and real-world technology"
		  intro="I speak about software engineering, infrastructure, automation, and the human side of technology. My talks are grounded in real production experience, critical thinking, and teaching complex systems in a clear and practical way."
		>
		  <div className="space-y-20">
			<SpeakingSection title="Málaga State University">
			  <Appearance
				href=""
				title="Engineering Beyond Code: Real-World Software Systems"
				description="An honest look at what it means to build, maintain, and evolve real production systems, beyond tutorials and buzzwords."
				event="University Tech Series"
				cta="November 15th, 2022"
			  />
			  <Appearance
				href=""
				title="From Infrastructure to Impact: Automation, CI/CD, and Cloud"
				description="A practical discussion on modern infrastructure, automation pipelines, and how engineering decisions affect teams, reliability, and users."
				event="Professional Development Series"
				cta="November 10th, 2022"
			  />
			  <Appearance
				href=""
				title="Technology as a Tool for Social Mobility"
				description="A session focused on how software engineering and technical education can open real opportunities for underrepresented and low-income students."
				event="University Conference"
				cta="November 8th, 2022"
			  />
			  <Appearance
				href=""
				title="The Human Side of Technology"
				description="Why sustainable technology is not only about tools and frameworks, but about people, ethics, learning, and long-term thinking."
				event="Academic Lecture Series"
				cta="October 26th, 2022"
			  />

          </SpeakingSection>
          {/* <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
          </SpeakingSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}
