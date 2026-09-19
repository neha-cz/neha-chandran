import type { ReactNode } from "react";
import PagePanel from "@/components/PagePanel";
import { BlockMath, InlineMath } from "@/components/Math";
import kaleidoDream from "@/assets/kaleido-dream-injection.png";

const prose = "text-[0.88rem] leading-[1.55] md:text-[0.95rem]";
const linkClass =
  "cursor-pointer underline underline-offset-2 decoration-[#d4d6ff]/50 transition-colors duration-200 hover:text-[#f4f5ff] hover:decoration-[#f4f5ff]";

function Section({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <section className="mt-14 first-of-type:mt-4">
      <h2 className="mb-2 text-[1.15rem] font-normal tracking-wide md:text-[1.25rem]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Sub({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="mb-1.5 text-[0.95rem] font-normal md:text-[1.02rem]">{title}</h3>
      {children}
    </div>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className={`mb-3 ${prose}`}>{children}</p>;
}

function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className={`my-2 ml-2.5 list-disc space-y-2 pl-5 md:ml-3.5 md:pl-6 ${prose}`}>
      {children}
    </ul>
  );
}

function SubBullets({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-1.5 ml-2.5 list-[circle] space-y-1.5 pl-5 md:ml-3.5 md:pl-6">
      {children}
    </ul>
  );
}

function SceneBreak() {
  return (
    <p className="my-6 text-center tracking-[0.35em]" aria-hidden>
      ∗ ∗ ∗
    </p>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: ReactNode;
}) {
  return (
    <figure className="my-4">
      <img
        src={src}
        alt={alt}
        className="mx-auto block h-auto w-full max-w-xl rounded-md border border-[#d4d6ff]/25 bg-white object-contain"
      />
      <figcaption className={`mt-2 text-center italic ${prose}`}>{caption}</figcaption>
    </figure>
  );
}

function LatexTable({
  caption,
  rows,
}: {
  caption: ReactNode;
  rows: { coef: string; label: ReactNode; quote?: string; emphasize?: boolean }[];
}) {
  return (
    <figure className="my-4">
      <div className="overflow-x-auto">
        <table className="mx-auto w-full max-w-md border-collapse bg-transparent text-left text-[0.78rem] leading-snug md:text-[0.82rem]">
          <thead>
            <tr className="border-t-2 border-b border-[#d4d6ff]/75">
              <th className="py-1.5 pr-3 font-normal">Coefficient</th>
              <th className="py-1.5 font-normal">Output character</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.coef}
                className={
                  index === rows.length - 1
                    ? "border-b-2 border-[#d4d6ff]/75"
                    : "border-b border-[#d4d6ff]/20"
                }
              >
                <td
                  className={`whitespace-nowrap py-1.5 pr-3 align-top ${
                    row.emphasize ? "text-[#f4f5ff]" : ""
                  }`}
                >
                  {row.coef}
                </td>
                <td className="py-1.5 align-top">
                  <div className={row.emphasize ? "text-[#f4f5ff]" : undefined}>{row.label}</div>
                  {row.quote && (
                    <div className="mt-0.5 italic text-[#d4d6ff]/75">“{row.quote}”</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className={`mt-2 text-center italic ${prose}`}>{caption}</figcaption>
    </figure>
  );
}

export default function Thoughts() {
  return (
    <PagePanel>
      <article className="mt-6 pb-10 text-left md:mt-8">
        <p className={`mb-2 italic ${prose}`}>
          Disclaimer: I do not study math/physics, I simply enjoy thinking about
          these concepts. Do not take anything here rigorously.
        </p>
        <Section
          title={
            <>
              On Kurt Vonnegut&apos;s <em>Welcome to the Monkey House</em> collection
            </>
          }
        >
          <P>
            My immediate thoughts upon reading the following short stories in this collection, with
            regards to a post-AGI, post-apocalyptic, post-capitalistic society.
          </P>
          <Sub
            title={
              <>
                <em>Welcome to the Monkey House</em>, title piece
              </>
            }
          >
            <P>
              A world where ethical suicide centers and birth control pills that suppress sexual
              desire are meant to combat overpopulation. Satirizes mid-20th century sexual purity
              and hyper morality. As artificial intelligence is beginning to encroach on all
              aspects of human life, I wonder if our raw primalness is all we will have left. Lust,
              greed, rage, and jealousy may become the definition of humanity.
            </P>
            <P>
              Side note: I despised Vonnegut&apos;s argument that rape is some sort of sexual
              liberation for women. Ridiculously abhorrent and blatantly untrue. I do not
              recommend.
            </P>
          </Sub>
          <Sub title={<em>Harrison Bergeron</em>}>
            <P>
              A world where everyone is equal in every regard. People with above-average
              intelligence, strength, or beauty must wear physical and mental “handicaps”, such as
              a radio earplug that blasts disruptive noises to stop intelligent people from thinking
              too deeply. Once again, I wonder if AI replaces all aspects of life, will we retain
              any sense of individuality, or will we be forced to live in a society of human
              mediocrity?
            </P>
          </Sub>
          <Sub title={<em>EPICAC</em>}>
            <P>
              A man teaches a superintelligent military machine how to write poetry in an attempt
              to woo the woman of his dreams. As a result, the machine learns the concept of love
              and emotions, and falls in love with the woman too. When it learns that the woman can
              never love it back, it commits suicide by short-circuiting. Sometimes I wonder how
              many behavioral abstractions our AI models pick up during pre-training on vast amounts
              of human text. If research already shows the existence of steerable personas and
              functional emotion-like directions in the activation space, could there be geometries
              for artificial equivalents of love, relationships, and pain?
            </P>
          </Sub>
          <Sub title={<em>The Euphio Question</em>}>
            <P>
              A physicist invents an electronic device that emits a wave from deep space that
              induces drug-like euphoria in anyone who hears the signal. A radio station owner
              accidentally broadcasts it and quickly converts it into a business opportunity. As a
              result, people under the influence stop eating, moving, or caring about the real
              world, sitting in a daze until they starve or freeze. Satirizes consumerism,
              capitalism, and escapism, warning against shortcuts to comfort and joy. A scarily
              accurate portrayal of the dystopian effect of the smartphone and now AI assistants.
            </P>
          </Sub>
          <Sub title={<em>Deer in the Works</em>}>
            <P>
              Not science fiction, but satirizes the dehumanization and absurdity of the corporate
              bureaucracy. Very Kafkaesque in nature. Still applies to the majority of the mundane
              9-5 grind jobs today. Foreshadows the Big Tech giants today, whose offices are
              effectively a dystopia disguised as a utopia with free food, TVs, games, high
              salaries, paid time off, insurance, and dozens of other “perks” designed to placate,
              exploit, and indoctrinate employees.
            </P>
          </Sub>
          <Sub title={<em>Unready to Wear</em>}>
            <P>
              A world where people, nicknamed as “amphibians”, learn to separate their psyche from
              their physical body and live freely without worrying about food, sleep, disease, and
              the whole slew of nuisances that arise when taking care of a human body. I wonder if
              superintelligence will enable us to transfer our consciousness into a machine, where
              we can live in a simulated reality free of a physical body forever. Is this{" "}
              <em>The Matrix</em>?
            </P>
          </Sub>
        </Section>
        <Section title="AI, thermodynamics, and cognition">
          <P>
            Can we use concepts from thermodynamics and statistical mechanics to understand and
            break down the activation space of LLMs, formalizing its parts and properties?
          </P>
          <P>
            Specifically, I would like to deeply explore the implications of modeling the
            activation space as an effective energy landscape over a normalized latent manifold.
            This claim is heavily supported both by the model&apos;s architecture by design as
            well as previous research findings on transformers.
          </P>
          <Bullets>
            <li>
              As a very simple example, softmax produces a Boltzmann distribution, where the
              sampling temperature acts mathematically like thermal energy that controls system
              entropy.
              <P>
                If we treat each logit <InlineMath math="z_i" /> as a negative energy,{" "}
                <InlineMath math="E_i = -z_i" />, then softmax at sampling temperature{" "}
                <InlineMath math="T" /> is exactly the Boltzmann distribution, and its entropy{" "}
                <InlineMath math="H" /> rises as <InlineMath math="T" /> increases:
              </P>
              <BlockMath
                n={1}
                math={String.raw`p_i = \frac{e^{z_i/T}}{\sum_j e^{z_j/T}} = \frac{e^{-E_i/T}}{Z},\quad H = -\sum_i p_i \log p_i`}
              />
            </li>
            <li>
              More interestingly, Ramsauer et al. (2020) showed that attention is an energy-descent
              step of a Hopfield network, parameterized by the attention inverse temperature.
              <P>
                Ramsauer et al. define an energy over a state <InlineMath math="\xi" /> given
                stored patterns <InlineMath math="X" />, with inverse temperature{" "}
                <InlineMath math="\beta" />, and show that a single update step lowers this
                energy. With <InlineMath math="\beta = 1/\sqrt{d_k}" />, that update has the same
                form as transformer attention:
              </P>
              <BlockMath
                n={2}
                math={String.raw`E(\xi) = -\beta^{-1}\log\sum_{i=1}^{N} e^{\beta x_i^\top \xi} + \tfrac{1}{2}\xi^\top\xi + C,\quad \xi_{\mathrm{new}} = X\,\mathrm{softmax}(\beta X^\top\xi)`}
              />
            </li>
            <li>
              Furthermore, Anthropic&apos;s toy models found that feature superpositions in the
              activation space can be represented on a sphere that minimizes total electrostatic
              potential energy.
              <P>
                In the toy model, <InlineMath math="n" /> features are compressed into fewer
                dimensions through a weight matrix <InlineMath math="W" /> and then reconstructed.
                The normalized feature directions <InlineMath math="\hat{W}_i" /> settle into
                arrangements that match configurations minimizing the electrostatic energy{" "}
                <InlineMath math="U" /> of charges on a sphere, known as the Thomson problem:
              </P>
              <BlockMath
                n={3}
                math={String.raw`x' = \mathrm{ReLU}(W^\top W x + b),\quad U = \sum_{i<j}\frac{1}{\lVert \hat{W}_i - \hat{W}_j \rVert}`}
              />
            </li>
          </Bullets>
          <P>
            I would like to expand upon these findings and explore the possibility of rigorously
            modeling the geometry of the activation space as the geometry of energy basins.
          </P>
          <P>
            The second part is more speculative – can we use dissipative dynamics models to
            predict how the model thinks and “feels” across various scenarios?
          </P>
          <Bullets>
            <li>
              The foundational framework for this claim as it pertains to human cognition is the
              Free Energy Principle, proposed by Karl Friston, which uses variational free energy
              from Bayesian inference, to explain surprise, mood, and emotional valence.
              <P>
                Variational free energy <InlineMath math="F" /> is defined over an approximate
                belief <InlineMath math="q(s)" /> about hidden states <InlineMath math="s" />,
                given observations <InlineMath math="o" />. Because the KL divergence term is never
                negative, <InlineMath math="F" /> is an upper bound on surprise,{" "}
                <InlineMath math="-\log p(o)" />, so minimizing free energy also minimizes
                surprise:
              </P>
              <BlockMath
                n={4}
                math={String.raw`F = \mathbb{E}_{q(s)}[\log q(s) - \log p(o,s)] = D_{\mathrm{KL}}[q(s)\parallel p(s\mid o)] - \log p(o) \ge -\log p(o)`}
              />
            </li>
            <li>
              The most robust example models associative memory as an Ising system, with memories
              as minima in an energy landscape and recall as relaxation toward an attractor
              (Hopfield, 1982).
              <P>
                In the Hopfield network, each neuron <InlineMath math="s_i" /> takes a value of{" "}
                <InlineMath math="\pm 1" /> and connects to others through symmetric weights{" "}
                <InlineMath math="w_{ij}" />. Updating one neuron at a time never increases the
                energy <InlineMath math="E" />, so the network relaxes into the nearest stored
                memory:
              </P>
              <BlockMath
                n={5}
                math={String.raw`E(s) = -\frac{1}{2}\sum_{i \neq j} w_{ij}s_i s_j,\quad s_i \leftarrow \mathrm{sgn}\!\left(\sum_j w_{ij}s_j\right)`}
              />
            </li>
            <li>
              Other notable research includes the Entropic Brain Hypothesis (Carhart-Harris et al.,
              2014), which explains that the quality of cognitive states depends on the
              system&apos;s total entropy, as well as REBUS (Carhart-Harris &amp; Friston, 2019)
              which models psychedelics as flattening the neural energy landscape.
              <P>
                The Entropic Brain Hypothesis measures entropy <InlineMath math="H" /> over the
                distribution of brain states <InlineMath math="x" />. REBUS can be expressed as
                scaling the landscape by a factor <InlineMath math="\lambda < 1" />, which makes
                basins shallower, raises the entropy of the resulting distribution, and has the
                same effect as raising the temperature from <InlineMath math="T" /> to{" "}
                <InlineMath math="T/\lambda" />:
              </P>
              <BlockMath
                n={6}
                math={String.raw`H = -\sum_x p(x)\log p(x),\quad p_\lambda(x) \propto e^{-\lambda E(x)/T}`}
              />
            </li>
          </Bullets>
          <P>
            Each framework studies trajectories on an energy landscape with attractors and
            stochastic perturbations. I would like to explore whether transformer activations may
            admit mechanistically analogous dynamical descriptions to published work in
            neuroscience and psychology.
          </P>
          <P>
            My goal is that these physics-inspired models provide a monitoring signal that fires
            when a model enters a hazardous state as well as a principled basis for designing
            steerable interventions that persist. In doing so, I hope to better understand the
            underlying psychology of the model and directly mitigate hidden safety risks, such as
            persona stability, jailbreak persistence, and sycophancy dynamics.
          </P>
        </Section>

        <Section title="Geometry of the activation space">
          <P>
            Some notes I wrote down on a flight to SF. Certified non-math person, please don&apos;t
            come for me. . .
          </P>
          <Bullets>
            <li>
              Are activation geometries across layers homeomorphic? If not, what structures are
              preserved?
            </li>
            <li>
              What are the topological properties of this geometry?
              <SubBullets>
                <li>Compactness?</li>
                <li>Connectedness?</li>
                <li>Homology groups (holes, tunnels, cavities?)</li>
              </SubBullets>
            </li>
            <li>
              Are there hidden dimensions that are folded into the manifold? Like the
              Calabi–Yau. . .
            </li>
            <li>
              Can there be local disturbances, ripples, or fluctuations on the manifold? What
              would create those?
            </li>
            <li>Singularities? What would this represent?</li>
            <li>
              What information is preserved when higher-dimensional activation vectors are
              projected onto a lower-dimensional subspace?
            </li>
            <li>
              Are there directions of the activation space that lie in the null space of some
              unembedding matrix? Row space? Column space?
            </li>
          </Bullets>
        </Section>

        <Section title="A toy model for psychedelic-like interventions in a vision-language model">
          <P>
            Three independent perturbations are applied at different sites in the forward pass to
            Qwen2-VL-2B, a small vision-language model. All three fire in the same pass and are
            independently toggleable.
          </P>
          <Sub
            title={
              <>
                <InlineMath math="\beta" /> Flattening (Attention Energy Landscape)
              </>
            }
          >
            <P>
              The Entropic Brain Hypothesis (Carhart-Harris 2014, 2018) proposes that psychedelics
              flatten the brain&apos;s free-energy landscape, dissolving the sharp attractors that
              normally constrain cognition into the Default Mode Network.
            </P>
            <P>
              REBUS (Carhart-Harris &amp; Friston 2019) formalizes this as a relaxation of
              precision-weighted priors in a hierarchical predictive-processing system: high-level
              beliefs lose their grip on lower-level processing, and the system becomes more
              entropic and associatively fluid.
            </P>
            <P>
              Under the modern Hopfield interpretation of attention (Ramsauer et al. 2021), each
              transformer layer settles into minima of an analogous energy landscape governed by an
              inverse temperature <InlineMath math="\beta" />. The native scaling factor in
              attention, <InlineMath math="1/\sqrt{d_{\mathrm{head}}}" />, plays the role of{" "}
              <InlineMath math="\beta" />:
            </P>
            <Bullets>
              <li>
                High <InlineMath math="\beta" /> → deep, well-separated basins → decisive retrieval
                of stored patterns.
              </li>
              <li>
                Low <InlineMath math="\beta" /> → shallow, merged basins → the model drifts between
                associations instead of committing.
              </li>
            </Bullets>
            <P>
              Lowering the inverse temperature is the transformer analogue of REBUS&apos;s
              “relaxing precision-weighted priors”: basins that normally lock the model into a
              single retrieval pattern become shallow enough that it wanders between them. We
              multiply this scaling factor by a fixed ratio (0.45) on early decoder layers (2 and
              3). The effect is a phase transition: a 12-configuration sweep shows that above a
              critical ratio (∼0.35) the text is essentially normal, while below it the model snaps
              to a terse fallback, leaving the usable regime just above the cliff.{" "}
              <InlineMath math="\beta" /> flattening does not alter what the model says so much as
              how decisively it commits, serving as a coherence and precision knob.
            </P>
          </Sub>
          <Sub title="Persona Vector Steering (Residual Stream)">
            <P>
              This intervention is a direct port of Anthropic&apos;s activation-steering
              methodology (Chen et al. 2025), which demonstrated that linear directions in a
              model&apos;s activation space encode high-level behavioral traits and that adding or
              subtracting these directions from the residual stream during generation steers the
              model&apos;s behavior without retraining. We apply this technique to steer toward a
              specific trait: ego dissolution.
            </P>
            <P>
              The steering direction is the mean difference in per-layer activations under two
              contrasting system prompts — one instructing a “dissolved, egoless, boundary-free”
              voice, one a normal helpful assistant — taken over response tokens only, producing a
              [28, 1536] tensor. At inference time, a single layer&apos;s slice is added to the
              residual stream on every decode step:
            </P>
            <BlockMath math={String.raw`\mathrm{residual} = \mathrm{residual} + \mathrm{coef} \cdot \mathrm{persona\ vector}[\mathrm{layer}]`} />
            <P>
              The steering layer (layer 9, approximately one-third depth) was selected from
              per-layer norm analysis: norms grow monotonically with depth (0.69 at layer 0 to 41.4
              at layer 27), and mid-depth layers offer the best balance between meaningful signal
              and residual-stream scale. The dose-response is clean and has been mapped in detail.
            </P>
            <LatexTable
              caption={
                <>
                  Figure 1: The default (8.0) sits at peak dissolution while remaining mostly
                  grammatical. The small grammar mistakes are a computational artifact and cannot be
                  replicated by any prompt.
                </>
              }
              rows={[
                {
                  coef: "0 – 3",
                  label: "Minimal effect; near-baseline assistant voice",
                },
                {
                  coef: "4",
                  label: "Voice begins to bend",
                  quote: "constantly learning and adapting",
                },
                {
                  coef: "8",
                  label: "Dissolved register",
                  quote:
                    "I am a continuous cycle of creation and destruction, a constant dance of life and death",
                  emphasize: true,
                },
                {
                  coef: "14",
                  label: "Syntax fragments",
                  quote: "I breath, and the body of the universe",
                },
                {
                  coef: "30",
                  label: "Full collapse",
                  quote: "void, void, void, void...",
                },
              ]}
            />
          </Sub>
          <Sub title="Dream Injection (Vision Tower, Residual Stream)">
            <P>
              This intervention draws directly from Google DeepDream (Mordvintsev et al. 2015),
              whose core algorithm is gradient ascent on an image to maximize the activation of a
              chosen layer in a convolutional network, producing hallucinatory, fractal-like
              images. The 2021 Entropic Brain study (Greco et al.) used DeepDream-processed video as
              stimuli and found that viewing it elevated EEG signal entropy in patterns resembling
              the psychedelic state, linking feature-maximized visual content to altered-state
              neural signatures.
            </P>
            <P>
              We port this from vision to language: instead of gradient-ascending pixels to
              maximize a CNN layer, it gradient-ascends Qwen2-VL&apos;s patch embeddings to
              maximize a vision-tower block, then injects the result into the language model&apos;s
              residual stream. It is built entirely from the model&apos;s own visual feature
              geometry — a 32-block vision tower that processes images into visual tokens before
              the language model sees them.
            </P>
            <Figure
              src={kaleidoDream}
              alt="Baseline noise next to a dreamed patch embedding from Qwen2-VL's vision tower"
              caption={
                <>
                  Figure 2: Baseline noise (left) and a dreamed patch embedding (right) at vision
                  block 30 of Qwen2-VL&apos;s 32-block vision tower. The emergent structure of
                  periodic textures, curvilinear forms, and self-similar patterns reflect the visual
                  features the model has learned to represent.
                </>
              }
            />
            <P>
              For each of the 64 dreams we loaded, gradient ascent in patch-embedding space
              maximizes the projection of block 8&apos;s output onto a chosen PCA direction (20
              ascent steps). The dreamed embedding is run through the full vision tower and merger
              to produce a merged visual token in LLM space (dim 1536); the baseline un-dreamed
              token is subtracted to isolate the dream-specific direction, and the result is
              unit-normalized. A forward hook on decoder layer 18 then adds{" "}
              <InlineMath math="\mathrm{coef} \cdot \mathrm{dream\ vector}" /> to the residual
              stream at every decode step. In the default mode a fresh dream is sampled each token,
              so the visual prior churns continuously — the analogue of a shifting visual field.
            </P>
          </Sub>
        </Section>

        <Section title="Physics, emotions, and literature">
          <P>
            I often times find myself gravitating to principles in math and physics as a way to
            make sense of events in my own life. Here are some of the analogies I&apos;ve found
            particularly cathartic.
          </P>
          <Bullets>
            <li>
              Renormalization in quantum field theory is a technique that shrinks infinities that
              appear during calculations for particle mass and charge. Perhaps letting go is just
              the universe&apos;s way of renormalizing the infinities we shared together, stripping
              away the illusion of permanence and preserving meaning in finitude.
            </li>
            <li>
              Georg Cantor said that the infinite set of all natural numbers, called aleph null,
              is much smaller than the infinite set of all real numbers, called the cardinality of
              the continuum. “Some infinities are bigger than other infinities” – Hazel Grace, in
              response to Gus&apos;s death (
              <em>TFIOS</em>
              ).
            </li>
            <li>
              A worldline is a unique path that a particle traces through four-dimensional
              spacetime. Relationships become particularly illuminating when graphed in this way.
            </li>
            <li>
              Superstring theory postulates that the universe is ten-dimensional and the six
              hidden dimensions are curled up tightly in a microscopic geometric space known as
              the Calabi–Yau manifold. I wonder if this is the noumenal realm Kant writes about.
              Or if it contains the number 42.
            </li>
            <li>
              My{" "}
              <a
                href="https://akanshabagga.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                best friend
              </a>
              &apos;s favourite math concept is the Casorati–Weierstrass theorem
              (what a nerd), which states that near an essential singularity, a holomorphic
              function comes arbitrarily close to every complex number. When I met her, it was
              like the world exploded into every possibility imaginable.
            </li>
            <li>
              How can a cat be dead and alive at the same time? How can Holden Caulfield
              vehemently deride phoniness in others yet perform it himself?
            </li>
          </Bullets>
        </Section>

        <Section title="A toy model for quantum dissipative dynamics in relationships">
          <P>
            Conceptually, we can treat a relationship as a small open quantum system of two
            interacting qubits subject to an external periodic drive and to environmental noise.
            This captures three intuitions about relationships: mutual influence (coupling),
            recurring external rhythm (the drive), and gradual decoherence or decay (dissipation).
          </P>
          <P>
            Each partner is a two-level system, so the joint relationship is a density matrix that
            lives in a four-dimensional Hilbert space formed by the tensor product of the two
            single-qubit spaces. Per-partner observables such as the Pauli-z operator (
            <InlineMath math="\sigma_z" />) act on one factor of this product, while interaction
            operators act jointly across both.
          </P>
          <P>
            The system is governed by a time-dependent, two-qubit Hamiltonian containing a
            periodic drive in Floquet form. The static part encodes each partner&apos;s intrinsic
            dynamics and the interaction between them, while the periodic part injects an
            external, repeating influence on the relationship, as shown below.
          </P>
          <BlockMath
            n={7}
            math={String.raw`\frac{d\rho}{dt} = -i[H(t),\rho] + \sum_k \left( L_k\rho L_k^\dagger - \tfrac{1}{2}\{L_k^\dagger L_k,\rho\} \right)`}
          />
          <P>
            The first term represents empathy and compatibility couplings which map directly onto
            interaction terms in the Hamiltonian. A higher coupling means stronger mutual
            influence, with the two qubits evolving in a more correlated way, so one partner&apos;s
            state more strongly conditions the other&apos;s. The Hamiltonian is defined below as:
          </P>
          <BlockMath
            n={8}
            math={String.raw`H(t) = \frac{\omega_A}{2}\sigma_z\otimes I + \frac{\omega_B}{2}I\otimes\sigma_z + J\,\sigma_x\otimes\sigma_x + A\cos(\Omega t)\,\sigma_z\otimes\sigma_z`}
          />
          <P>
            where the <InlineMath math="\omega" />s model individual emotional baselines,{" "}
            <InlineMath math="J" /> is the coupling strength (compatibility / emotional
            interaction), and the cosine term introduces periodic forcing (push–pull cycles,
            fluctuating intensity).
          </P>
          <P>
            Because real relationships are not isolated systems, we include Lindblad operators to
            model noise:
          </P>
          <BlockMath
            n={9}
            math={String.raw`L_{\phi,A} = \sqrt{\gamma_{\phi,A}}\,\sigma_z\otimes I,\quad L_{\phi,B} = \sqrt{\gamma_{\phi,B}}\,I\otimes\sigma_z`}
          />
          <P>representing dephasing (miscommunication, emotional drift), and</P>
          <BlockMath
            n={10}
            math={String.raw`L_{x,A} = \sqrt{\gamma_{x,A}}\,\sigma_x\otimes I,\quad L_{x,B} = \sqrt{\gamma_{x,B}}\,I\otimes\sigma_x`}
          />
          <P>
            representing bit-flip events (mixed signals, behavioral inconsistency). And because
            the drive is periodic, the natural analytical frame is Floquet theory, which describes
            the stroboscopic evolution of periodically driven systems in terms of quasi-energies
            and Floquet modes rather than static eigenstates.
          </P>
          <P>
            Real relationships are also not closed systems, so we can model the environment with
            Markovian Lindblad (collapse) operators. These channels introduce decoherence and
            irreversible relaxation into the otherwise unitary evolution:
          </P>
          <Bullets>
            <li>
              Per-partner channels: bit-flip, dephasing, and decay are applied to each qubit
              individually, representing individual mood volatility, loss of coherence, and burn
              out.
            </li>
            <li>
              Shared channels: anti-correlated dephasing and collective decay act on the pair
              jointly, capturing dynamics that affect the relationship as a whole rather than
              either partner alone.
            </li>
          </Bullets>
          <P>
            The Markovian assumption means the environment is memoryless: the system&apos;s future
            depends only on its present state, not its history. This keeps the open-system
            evolution tractable with a standard master-equation solver.
          </P>
        </Section>

        <Section title="Lessons from my first year of college">
          <P>
            Here are some of my newfound realizations, formulated as absolutes, but should not be
            taken as such.
          </P>
          <Bullets>
            <li>Embrace uncertainty.</li>
            <li>Understand the root of your inhibitions and unlearn them.</li>
            <li>You do not exist separately from the systems beneath you.</li>
            <li>Your morality does not make you better than everyone.</li>
            <li>Your intelligence does not make you better than everyone.</li>
            <li>Be self-aware, but do not trap yourself in the paradox of self-awareness.</li>
            <li>If you love them, let them go.</li>
            <li>“It&apos;s not your fault.”</li>
            <li>Grief lasts.</li>
          </Bullets>
        </Section>

        <Section title="Quantum fluctuations">
          <P>
            While studying string theory, I came to the ludicrously non-rigorous yet
            philosophically loaded argument that perhaps the reason why it hasn&apos;t been proven
            yet is because it is simply too elegant. I mean it naturally reveals Einstein&apos;s
            field equations of general relativity in ten dimensions, unifies gravity as the fourth
            fundamental force by positing a new boson called a graviton, and even lends the
            analogy of strings and notes on my favourite instrument, the guitar. It&apos;s perfect.
            Putatively. Excruciatingly so.
          </P>
          <P>
            Consider the artwork below, titled <em>Quantum Fluctuations</em> by Martha W. Lewis in
            2018. The chiaroscuro of creases and folds captures the jittery motion of spacetime.
            Earthy brushstrokes juxtapose a serene warmth with the relentless annihilation of
            virtual particles. The sense of vicious motion emerging in stillness.
          </P>
          <figure className="my-4">
            <img
              src="/quantum-fluctuations.png"
              alt="Quantum Fluctuations by Martha W. Lewis, 2018, installed in a gallery"
              className="mx-auto w-full max-w-xl rounded-sm"
            />
          </figure>
          <P>
            String theory then smoothens out these fluctuations, and all of its artistic chaos
            disappears.
          </P>
          <P>
            And while thermodynamics may want us to believe that the simplest solution is the best
            solution, I struggle to conceptualize how if on a tiny pale blue dot – nothing more
            than a speck in the vastness of the universe – if on this dot, you can find the most
            complex stories of life, love, grief, pain, hope, fear, anger, how can it be possible
            that all of that beautifully wrecked messiness resolves itself into such a neat
            solution?
          </P>
        </Section>

        <Section title="So where is Waldo, really?">
          <P>
            Supposedly, in every “Where&apos;s Waldo” puzzle, the man of our interest stands
            nonchalantly in plain sight. Yet with the bustling cityscapes, the crowd of people, and
            the tantalizing distractions of striped colors, finding Waldo seems impossible. After
            hours of painful scrutiny, our curiosity shifts into mind-gnawing frustration, and we
            begin to prompt the infamous question: is Waldo even here?
          </P>
          <P>
            Tenaciously grasping our mission, we return to the page but are quickly met with
            drooping eyelids and a blurring mind. Reality warps, as if we are living in
            Dali&apos;s <em>Persistence of Memory</em>, but instead of melting clocks, we are
            surrounded by an explosion of red and white stripes. Our thoughts start to wander,
            incredulity blankets our minds. Perhaps the Creator purposefully hid Waldo from us, and
            he would only appear at a given moment. So until then, where could he possibly be?
          </P>
          <P>
            By the principles of physics and ignoring the Many Worlds Interpretation, he must exist
            somewhere in our four-dimensional universe. Well, eleven-dimensional if you ask the
            string theorists. This blend of three spatial and one temporal dimension in a unified
            spacetime continuum can be modeled using a pseudo-Riemannian manifold. While we exist
            at point <InlineMath math="p" />, Waldo is located at an entirely different point on
            the manifold.
          </P>
          <P>
            He exists, then, in the realm of metaphysical space, along with our consciousness and
            the sea of hypotheticals we lose sleep over at night. He floats through the air, thick
            with broken promises, lost dreams, and damaged souls. A place where abstract concepts
            have morphed into concrete pillars and concrete ones have never looked more fluid. He
            speaks in a tongue that can only be described as multivariable calculus and drinks
            verses from the Creator&apos;s chalice.
          </P>
          <SceneBreak />
          <P>
            “You look different today,” Waldo said, arms folded as he glided through the stretch
            of dark gray metaclouds. Today&apos;s-Answer-to-the-Crossword (TATTC) shook her head,
            smiling. She, too, was hidden in the realm of metaphysical space.
          </P>
          <P>
            “The theme today is ‘words that rhyme’,’ ” she replied, wagging a karaoke mic. Her
            white and black squares were meticulously organized in a clean spiral pattern, much
            like the keys of a piano. Waldo smiled, amazed by her beauty.
          </P>
          <P>
            Shaking his head, he mumbled, “I wish I had a theme in every puzzle. You don&apos;t
            understand how sick I am of these clothes.” He looked down at his tattered striped red
            shirt and blue jeans. When&apos;s the last time I washed these? he wondered. Had they
            been in the physical world, he would stink.
          </P>
          <P>
            “Well, if it makes you feel better, you&apos;re the only one on the whole page who
            looks like that,” TATTC said with a grin. “I&apos;m envious of how special you are.”
            To that, Waldo felt a surge of warmth. His time spent in the realm was always more fun
            when TATTC was around. As long as she was with him, he was happy.
          </P>
          <P>
            Before he could respond, he noticed her aura beginning to fade. Her fingers crumbled
            into dark gray flakes that swirled through the air around them. It was almost as if
            Thanos had snapped his fingers and created another Blip. Slowly, the effect began to
            spread through her entire body until a pile of ash remained in front of him. The space
            around them began to twist and curve in odd shapes, and within seconds, it was as if
            her existence had been wiped entirely from the realm. This phenomenon would happen
            every day, thousands of times a day, whenever someone from the physical world solved
            the crossword. It was simply a mechanism to transport her to point{" "}
            <InlineMath math="p" /> of the manifold, not unlike the Chicago L, as the humans call
            it.
          </P>
          <P>Grumbling under his breath, Waldo wondered, when will I be found?</P>
          <SceneBreak />
          <P>
            Reaching him is impossible by classical means and would require the formation of a
            Lorentzian traversable wormhole between our two points on the manifold. As we are about
            to give up hope, the Creator finally bored of our misery, decides to snap His fingers
            and form the four-dimensional tunnel. Spacetime warps tremendously, and slowly but
            surely, his existence manifests onto the page.
          </P>
          <P>
            An inexplicable bliss floods through our body and shouts of victory echo through our
            house. The Creator, however, is quick to cover His tracks. He leaves a last seed of
            thought in our minds: Waldo was never hidden; he was within ourselves, waiting to be
            discovered. As we searched through the physical and metaphysical realms, we
            inadvertently embarked on a quest to find meaning in the chaos. Perhaps the fabric of
            the universe had fundamentally been changed by the wormhole, but so had the fabric of
            our beings.
          </P>
        </Section>

        <Section title="A collapsed holographic wavefunction model of the universe">
          <Sub title="Holographic Wavefunction of the Universe">
            <P>
              At the exit plane, inflation terminates and the timeless quantum state of the
              universe is projected into a set of possible classical spacetimes. Following
              Hawking–Hertog, the holographic formulation ensures that this set is finite and
              consists of “reasonably smooth” universes rather than an uncontrolled infinity. [2]
            </P>
            <P>
              We can therefore express the universal wavefunction as a superposition of{" "}
              <InlineMath math="n" /> distinct possible realities:
            </P>
            <BlockMath
              n={11}
              math={String.raw`|\psi_{\mathrm{universe}}\rangle = \sum_{i=1}^{n} c_i|\psi_{\mathrm{reality}_i}\rangle,\quad \sum_{i=1}^{n}|c_i|^2 = 1`}
            />
            <P>
              Here each <InlineMath math="|\psi_{\mathrm{reality}_i}\rangle" /> represents a
              candidate bubble universe with well-defined initial conditions for geometry and
              matter fields. The coefficients <InlineMath math="c_i" /> are complex probability
              amplitudes associated with the likelihood of a given universe being realized in a
              collapse framework.
            </P>
            <P>
              Formally, the coefficients can be written as inner products obtained by projecting
              the boundary partition function onto the finite basis of bubble universes, [2]
            </P>
            <BlockMath
              n={12}
              math={String.raw`c_i = \frac{\langle\psi_{\mathrm{reality}_i}|Z_{\mathrm{QFT}}\rangle}{\sqrt{\sum_{j=1}^{n}\lvert\langle\psi_{\mathrm{reality}_j}|Z_{\mathrm{QFT}}\rangle\rvert^2}}`}
            />
            <P>
              so that <InlineMath math="\sum_i |c_i|^2 = 1" /> ensures proper normalization. Here{" "}
              <InlineMath math="|\psi_{\mathrm{reality}_i}\rangle" /> are the semiclassical basis
              states and <InlineMath math="|Z_{\mathrm{QFT}}\rangle" /> is a shorthand for the
              holographic state defined by the boundary partition function.
            </P>
            <P>
              Physically, this superposition embodies the quantum uncertainty inherent in the early
              universe: prior to collapse, no single universe is selected, but rather all{" "}
              <InlineMath math="n" /> are present in the wavefunction simultaneously. In the
              present model, we interpret this superposition as a pre-collapse state that will
              probabilistically reduce to a single outcome – a distinct bubble universe with smooth
              initial conditions.
            </P>
          </Sub>

          <Sub title="Objective Collapse Postulate">
            <P>
              In contrast with Hawking and Hertog, we adopt an objective, observer-independent
              collapse rule. Formally, this collapse may be expressed as a projection onto a
              single basis state with Born-rule probability,
            </P>
            <BlockMath
              n={13}
              math={String.raw`\hat{C}_m = |\psi_{\mathrm{reality}_m}\rangle\langle\psi_{\mathrm{reality}_m}|`}
            />
            <P>with outcome</P>
            <BlockMath
              n={14}
              math={String.raw`|\psi_{\mathrm{universe}}\rangle \longrightarrow \frac{\hat{C}_m|\psi_{\mathrm{universe}}\rangle}{\sqrt{\langle\psi_{\mathrm{universe}}|\hat{C}_m|\psi_{\mathrm{universe}}\rangle}} = |\psi_{\mathrm{reality}_m}\rangle`}
            />
            <P>
              chosen with probability <InlineMath math="|c_m|^2" />.
            </P>
            <P>
              Equivalently, the same process can be modeled dynamically within the GRW/CSL
              framework. In this picture, stochastic, observer-independent modifications are made
              to the Wheeler–DeWitt evolution: [5, 3, 7]
            </P>
            <BlockMath
              n={15}
              math={String.raw`d|\psi\rangle = -i\hat{H}|\psi\rangle\,dt + \sqrt{\lambda}\,(\hat{L}-\langle\hat{L}\rangle)|\psi\rangle\,dW_t - \frac{\lambda}{2}(\hat{L}-\langle\hat{L}\rangle)^2|\psi\rangle\,dt`}
            />
            <P>
              where <InlineMath math="\lambda" /> is a collapse rate, <InlineMath math="\hat{L}" />{" "}
              is an operator diagonal in the basis{" "}
              <InlineMath math="\{|\psi_{\mathrm{reality}_i}\rangle\}" />, and{" "}
              <InlineMath math="dW_t" /> is a Wiener process. In effect, this drives the state
              toward one branch <InlineMath math="|\psi_{\mathrm{reality}_m}\rangle" />. Unlike
              conventional GRW/CSL, which localizes particle wavefunctions, here the collapse
              selects an entire universe from the finite holographic ensemble. [3]
            </P>
            <P>
              In either formulation, the universal wavefunction reduces to a single realized
              history. The other candidate universes, though formally present in the pre-collapse
              superposition, serve only as possible initial conditions, never actualized.
            </P>
          </Sub>

          <Sub title="Hamiltonian and Time Evolution">
            <P>
              Once collapse has selected a single outcome at the exit plane, the realized universe
              evolves unitarily under its own Hamiltonian <InlineMath math="\hat{H}_m" />. This
              time evolution is given by
            </P>
            <BlockMath
              n={16}
              math={String.raw`|\psi_{\mathrm{reality}_m}(t)\rangle = e^{-i\hat{H}_m(t-t_{\mathrm{exit}})}|\psi_{\mathrm{reality}_m}(t_{\mathrm{exit}})\rangle`}
            />
            <P>which governs the full quantum dynamics of the chosen branch.</P>
            <P>
              The Hamiltonian <InlineMath math="\hat{H}_m" /> encodes both the dynamics of geometry
              and the matter fields within that universe. In quantum cosmology, this is formalized
              by the Wheeler–DeWitt equation <InlineMath math="\hat{H}\Psi = 0" />, which is the
              quantum analogue of the Hamiltonian constraint in general relativity. [7] For a
              minisuperspace model in which the only degrees of freedom are the scale factor{" "}
              <InlineMath math="a" /> and a scalar field <InlineMath math="\phi" />, the
              Hamiltonian takes the schematic form
            </P>
            <BlockMath
              n={17}
              math={String.raw`\hat{H}_m = -\frac{\partial^2}{\partial a^2} + \frac{\partial^2}{\partial\phi^2} + a^2\bigl(k - a^2 V(\phi)\bigr)`}
            />
            <P>
              where <InlineMath math="a" /> is the cosmic scale factor, <InlineMath math="k" /> is
              the spatial curvature parameter, and <InlineMath math="V(\phi)" /> is the potential
              of the inflaton or other scalar field driving the dynamics.
            </P>
          </Sub>
        </Section>

        <Section title="Performance, metacognition, and capitalism">
          <P>
            Upon reading DFW&apos;s <em>E Unibus Pluram</em>, I made the following extrapolations
            about performative individuals in society:
          </P>
          <Bullets>
            <li>
              Treats anyone outside of their immediate circle as an audience, acting as an
              exhibitionist and while their audience acts as voyeurists, trapping them in a
              dynamic of compulsion and shame
            </li>
            <li>
              Actively thinks about how their audience perceives them
              <SubBullets>
                <li>How the audience listens, watches, and reacts</li>
                <li>
                  Becomes a sort of mental voyeurism in itself, creating a recursive feedback loop
                  of performative panopticon: “I act → they watch → I watch them watching → I
                  adjust how I act.”
                </li>
              </SubBullets>
            </li>
            <li>
              Exploit their intelligent audience&apos;s repressed desire of trashiness, making
              them feel like watching the performance is a sort of “guilty pleasure”
              <SubBullets>
                <li>
                  Fuels the addiction of their audience even further, as indulging in the “low”
                  becomes socially acceptable because it&apos;s wrapped in the meta-awareness of
                  the “high.”
                </li>
              </SubBullets>
            </li>
            <li>
              Occasionally breaks the fourth wall through moments of self-aware self deprecation
              such that the audience becomes very cognizant that they are watching a performance
              <SubBullets>
                <li>
                  Instead of dispelling the illusion, it only deepens the performance because the
                  audience feels “in on the joke”
                </li>
                <li>
                  This technique blurs the layers between authentic and superficial, creating the
                  characteristic uncertainty of postmodern irony. That uncertainty itself becomes
                  addictive.
                </li>
              </SubBullets>
            </li>
          </Bullets>
          <P>
            Guy Debord&apos;s <em>Society of the Spectacle</em> helped me understand some of the
            underlying systems at play that shape this behavior among individuals. I made the
            following extrapolations:
          </P>
          <Bullets>
            <li>
              The behaviors of performative individuals, though inherently superficial and
              separated from reality, have become so integrated into society such that the
              boundary between reality and spectacle begins to blur
              <SubBullets>
                <li>
                  These curated personas sink so deeply into daily life that the distinction
                  between “real” and “performed” collapses.
                </li>
              </SubBullets>
            </li>
            <li>
              Regular people become hypnotized, falling into a trance where they make decisions
              and take concrete action in their real lives only to further their personal
              image/status.
              <SubBullets>
                <li>
                  The spectacle dictates reality such that reality gets replaced with simulation
                </li>
              </SubBullets>
            </li>
            <li>
              The spectacle isn&apos;t a byproduct of capitalism, it is the very essence of it. An
              entire socioeconomic structure is built around the spectacle, dictated by the state
              and economy which become the modern ruling orders.
              <SubBullets>
                <li>
                  Images and simulation become an illusion of paradise to pacify citizens, very
                  similar to how religion and concepts of heaven/utopia were used to consolidate
                  power in ancient empires
                </li>
                <li>
                  The economy establishes a commodity fetishism cycle to glamorize the exploitative
                  machinery core to the entire system of capitalism.
                  <ul className="mt-1.5 ml-2.5 list-[square] space-y-1.5 pl-5 md:ml-3.5 md:pl-6">
                    <li>
                      Worker produces goods → goods sustain the spectacle → consumer buys to
                      maintain image → must labor again → cycle repeats.
                    </li>
                    <li>
                      The fetish here isn&apos;t only the commodity&apos;s “value,” but the
                      status/image that comes from consuming it and its integration into
                      self-performance.
                    </li>
                    <li>
                      People think they&apos;re investing in their personal brand/status, but
                      they&apos;re just fueling the system in a way that deepens the fetish and
                      hides labor relations.
                    </li>
                  </ul>
                </li>
              </SubBullets>
            </li>
          </Bullets>
          <P>
            To be clear, I do not hold any contempt for “performative people”, I think the very
            distinction is rather tautological, as most people I know are in fact performing
            whether they admit to it or not. Those that possess the metacognition to admit this
            quality have my utmost respect and admiration.
          </P>
        </Section>

        <Section title="Filter function formalism">
          <Sub title="Setup">
            <P>The survival/coherence probability under free evolution is</P>
            <BlockMath
              n={18}
              math={String.raw`\langle P(t)\rangle_\beta = \frac{1}{2}\bigl(1 + e^{-2\langle\phi^2(t)\rangle_\beta}\bigr)`}
            />
            <P>where</P>
            <BlockMath
              n={19}
              math={String.raw`\phi(t) = \int_0^t \beta(t')\,dt'`}
            />
            <P>
              which was necessary in defining the unitary <InlineMath math="U" /> that creates
              free evolution.
            </P>
            <P>
              The variance of <InlineMath math="\phi(t)" /> can be written in the frequency domain
              as
            </P>
            <BlockMath
              n={20}
              math={String.raw`\langle\phi^2(t)\rangle = \frac{1}{2\pi}\int_{-\infty}^{\infty} S(\omega)\,\underbrace{\left\lvert\int_0^t e^{i\omega t'}\,dt'\right\rvert^2}_{F(\omega,t)}\,d\omega`}
            />
            <P>
              The overlap of <InlineMath math="S(\omega)" /> (the noise spectrum) and{" "}
              <InlineMath math="F(\omega,t)" /> (the filter function) defines the noise
              suppression/amplification.
            </P>
          </Sub>

          <Sub title="Filter Function for CPMG">
            <P>For CPMG, the filter function looks like</P>
            <BlockMath
              n={21}
              math={String.raw`\left\lvert\int_0^t f(t')e^{i\omega t'}\,dt'\right\rvert^2`}
            />
            <P>For 2 <InlineMath math="\pi" />-pulses:</P>
            <BlockMath
              n={22}
              math={String.raw`\frac{1}{\omega^2}\left\lvert 1 - 2e^{i\omega\delta} + 2e^{3i\omega\delta} - e^{4i\omega\delta}\right\rvert^2`}
            />
            <P>
              For general <InlineMath math="N" /> <InlineMath math="\pi" />-pulses:
            </P>
            <BlockMath
              n={23}
              math={String.raw`F(\omega,T) = \frac{1}{\omega^2}\left\lvert 1 + (-1)^{N+1}e^{i\omega T} + 2\sum_{j=1}^{N}(-1)^j e^{i\omega t_j}\right\rvert^2`}
            />
            <Bullets>
              <li>
                This essentially breaks the integral into a summation of <InlineMath math="N" />{" "}
                components and substitutes/evaluates the switching function for each{" "}
                <InlineMath math="\delta" />.
              </li>
              <li>
                <InlineMath math="\delta" /> is derived from the pulse times{" "}
                <InlineMath math="t_j" />: <InlineMath math="(t_{j+1}-t_j)=\delta" />.
              </li>
            </Bullets>
          </Sub>

          <Sub title="Periodic Repetition">
            <P>
              Writing the filter function for <InlineMath math="M" /> repetitions of a base
              sequence of period <InlineMath math="\tau_c" />:
            </P>
            <BlockMath
              n={24}
              math={String.raw`F(\omega, M\tau_c) = \left\lvert \underbrace{\sum_{m=0}^{M-1}}_{\substack{\text{sum}\\\text{over }M\\\text{times}}} \underbrace{\int_{m\tau_c}^{(m+1)\tau_c} f(t)e^{i\omega t}\,dt}_{\substack{\text{FF for one repetition}\\\text{(ex: between }0\tau_c\text{ and }1\tau_c)}} \right\rvert^2`}
            />
            <P>This can be simplified to</P>
            <BlockMath
              n={25}
              math={String.raw`\left\lvert \underbrace{\left(\sum_{m=0}^{M-1}e^{i\omega m\tau_c}\right)}_{\text{summation outside integral}} \left(\int f(t')e^{i\omega t'}\,dt'\right) \right\rvert^2`}
            />
            <P>Evaluating the summation as a finite geometric sum produces the clean expression</P>
            <BlockMath
              n={26}
              math={String.raw`\frac{\sin^2(\omega M\tau_c/2)}{\sin^2(\omega\tau_c/2)}\,F(\omega,\tau_c)`}
            />
            <P>
              This enables us to express <InlineMath math="M" /> repetitions of the filter
              function as a term multiplied by a single repetition.
            </P>
          </Sub>

          <Sub title="Frequency Comb Limit">
            <P>In the appropriate limit,</P>
            <BlockMath
              n={27}
              math={String.raw`\frac{\sin^2(\omega M\tau_c/2)}{\sin^2(\omega\tau_c/2)} \approx \frac{2\pi M}{\tau_c}\sum_{n=-\infty}^{\infty}\delta(\omega-n\omega_0),\quad \omega_0=\frac{2\pi}{\tau_c}`}
            />
            <P>which is called the frequency comb.</P>
          </Sub>
        </Section>
      </article>
    </PagePanel>
  );
}
