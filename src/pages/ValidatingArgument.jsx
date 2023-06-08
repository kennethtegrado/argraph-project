import { AccordionItem } from "../components";

export default () => {
    return (
        <div className="flex flex-col gap-10 max-w-5xl">
            <h1 className="text-4xl font-bold">Validating Arguments</h1>
            <div className="bg-accent-content p-10 shadow-lg shadow-secondary/25 rounded-md">
                <p className="mb-2">
                    {" "}
                    Validating arguments in mathematics is crucial for several
                    reasons:
                </p>

                <ol className="list-decimal px-10 flex flex-col gap-2">
                    <li>
                        Establishing Accuracy: The thorough and precise
                        reasoning required for mathematics. In order to
                        guarantee the accuracy of mathematical claims and
                        conclusions, arguments must be validated. The integrity
                        and dependability of mathematical knowledge depend on
                        this accuracy.
                    </li>
                    <li>
                        Truth-finding: The goal of mathematics is to discover
                        the basic facts about the universe's structure, as well
                        as the relationships between various objects and
                        abstract ideas. Mathematicians can show that a
                        particular claim is true within the accepted axiomatic
                        system or mathematical framework by examining the
                        credibility of an argument.
                    </li>
                    <li>
                        {" "}
                        Extending Prior Understanding: The study of mathematics
                        is a cumulative one. Theorems and discoveries in
                        mathematics are built upon previous ones. This makes it
                        possible to incorporate fresh concepts into the
                        preexisting mathematical structure, leading to new
                        developments and discoveries.
                    </li>
                    <li>
                        {" "}
                        Building Logical Reasoning Abilities: Mathematical
                        arguments' validity builds logical reasoning abilities.
                        Mathematicians learn to think critically and to spot
                        connections, patterns, and logical implications by
                        carefully examining the validity and structure of an
                        argument.
                    </li>
                    <li>
                        Collaboration and peer review: A key component of the
                        peer review process in mathematics is validating
                        arguments. The validity and dependability of published
                        mathematical work are enhanced by peer review.
                        Collaboration among mathematicians depends on their
                        capacity to persuasively support and refute one
                        another's arguments.
                    </li>
                    <li>
                        {" "}
                        Error detection and correction: Validating arguments
                        aids in the detection and correction of mistakes in
                        mathematical reasoning. Mathematicians can strengthen
                        their proofs, improve their arguments, and make sure
                        their calculations are sound by participating in the
                        validation process.
                    </li>
                </ol>
            </div>
            <div className="flex flex-col gap-10">
                <p>
                    {" "}
                    A logical chain of statements where the conclusion follows
                    logically from the stated premises or assumptions is
                    referred to as a{" "}
                    <strong className="underline text-primary">
                        valid argument
                    </strong>{" "}
                    in mathematics. These guidelines guarantee that the
                    conclusion was arrived at validly and credibly. In
                    mathematics, valid arguments offer a rigorous and
                    trustworthy way to prove the correctness of statements and
                    theorems.
                </p>

                <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold">Basic Concepts</h3>
                    <AccordionItem title="Logic">
                        <p>
                            Logic serves as the basis for approving arguments.
                            As a result, the conclusions are rationally deduced
                            from the premises according to the rules and
                            principles it provides.{" "}
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Premise">
                        <p>
                            A premise is a statement or piece of evidence that
                            serves as the cornerstone of an argument. The
                            premises of an argument must be true or accepted as
                            true in order for it to be supported.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Inference">
                        <p>
                            Drawing logical conclusions from the premises is
                            known as inference. Valid inferences guarantee that
                            the premises logically support the conclusion.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Coherence">
                        <p>
                            The logical coherence and compatibility of
                            statements within an argument are referred to as
                            coherence. The premises and the conclusion should be
                            coherently related and mutually supportive.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Sound Argument">
                        <p>
                            If an argument is both valid and has true premises,
                            it is said to be sound. Strong evidence and a high
                            level of confidence in the veracity of the
                            conclusion are provided by sound arguments.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Counterarguments">
                        <p>
                            Considering and responding to the prospect of
                            counterarguments or opposing viewpoints is a
                            necessary step in validating an argument. By
                            foreseeing objections along with offering rebuttals
                            or additional evidence to support the argument's
                            validity, evaluating counterarguments strengthens
                            the argument.
                        </p>
                    </AccordionItem>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-primary">
                    Propositional Logic
                </h2>
                <p>
                    The study of propositions and their logical connections is
                    the focus of propositional logic. Without taking into
                    account the precise content or meaning of those
                    propositions, it prioritizes investigating and altering the
                    logical structure of statements. Propositions are statements
                    that can only be true or false in propositional logic. They
                    are symbolized by variables, which are frequently identified
                    by letters like p, q, or r. The rules for deducing these
                    propositions' truth values are established by propositional
                    logic, which also permits the incorporation of these
                    propositions using logical operators. It enables the
                    analysis of logical connections between propositions as well
                    as the structured manipulation of logical expressions. One
                    can build strong arguments, assess logical consistency, and
                    reason formally and rigorously about complex systems by
                    using propositional logic.
                </p>

                <div className="flex flex-col gap-5">
                    <h4 className="text-2xl font-bold">
                        Essential Elements of Propositional Logic
                    </h4>
                    <AccordionItem title="Propositional Variables">
                        <p>
                            These are the symbols that are used to denote
                            distinct propositions. A true or false value can be
                            assigned to each variable.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Logical Connectives">
                        <p>
                            The operators known as logical connectives are used
                            to join propositions and create compound
                            propositions. Proper connectives in propositional
                            logic include:
                            <ol>
                                <li>
                                    2.1. Negation (~ or ¬): Indicates the
                                    rejection or negation of a proposition. For
                                    instance, p signifies "not p."
                                </li>
                                <li>
                                    2.2. Conjunction (∧ or &): Denotes the "and"
                                    operation in logic. P and Q, for instance,
                                    means "p and q."
                                </li>
                                <li>
                                    2.3. Disjunction (∨ or ∥): This word
                                    symbolizes the logical "or" operation. P q,
                                    for instance, denotes "p or q."
                                </li>
                                <li>
                                    2.4. Conditional (→): Is a representation of
                                    the conditional relationship. If p, then q,
                                    for instance, means "if p, then q."
                                </li>
                                <li>
                                    2.5. Biconditional (↔): Denotes a
                                    relationship that is biconditional or
                                    equivalent. P q, for instance, denotes "p if
                                    and only if q."
                                </li>
                            </ol>
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Truth Tables">
                        <p>
                            Truth tables are used to systematically display each
                            possible combination of a proposition's truth value
                            as well as the resulting truth values of compound
                            propositions. They enable the investigation of
                            logical connections and the evaluation of the
                            veracity of intricate propositions.
                        </p>
                    </AccordionItem>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">
                    Constructing Propositions and Arguments using Propositional
                    Logic
                </h4>
                <div className="flex flex-col gap-4">
                    <p>
                        Identify the propositions: Start by deciding which
                        specific declarative sentences or statements you want to
                        work with. Think about the following ideas, for
                        instance:
                    </p>
                    <div className="mockup-window border bg-base-300">
                        <div className="flex p-8 bg-base-200">
                            <ul>
                                <li>Proposition 1: "The sun is shining."</li>
                                <li>Proposition 2: "It is raining."</li>
                                <li> Proposition 3: "I will go for a walk."</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>
                        Assign propositional variables: Each proposition should
                        be given a propositional variable, as stated. Lowercase
                        letter variables like p, q, r, etc. are frequently used.
                        Let's assign the following variables to them for our
                        example:
                    </p>
                    <div className="mockup-window border bg-base-300">
                        <div className="flex p-8 bg-base-200">
                            <ul>
                                <li>Proposition 1: p</li>
                                <li>Proposition 2: q</li>
                                <li>Proposition 3: r</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>
                        Apply logical operators: To combine the propositions and
                        create compound propositions, use logical operators. The
                        commonly used logical operators are negation (~ or ¬),
                        conjunction (∧ or &), disjunction (∨ or ∥), conditional
                        (→), and biconditional (↔).
                    </p>
                    <div className="mockup-window border bg-base-300">
                        <div className="flex p-8 bg-base-200">
                            <ul className="flex flex-col gap-5">
                                <li>
                                    Negation: To represent the denial or
                                    negation of a proposition, use the negation
                                    operator. The negation of p, for instance,
                                    would be ~p.
                                </li>
                                <li>
                                    Conjunction: The logical "and" operation is
                                    represented by the conjunction operator. For
                                    instance, the compound proposition "p and q"
                                    is represented by p∧q.
                                </li>
                                <li>
                                    Disjunction: The logical "or" operation is
                                    represented by the disjunction operator. For
                                    instance, the compound proposition "p or q"
                                    is represented by p∨q.
                                </li>
                                <li>
                                    Conditional: To represent the conditional
                                    relationship, use the implication operator.
                                    For instance, the compound statement "if p,
                                    then q" is represented by p→q.
                                </li>
                                <li>
                                    Biconditional: The biconditional or
                                    equivalence relationship is represented by
                                    the equivalence operator. For instance, the
                                    compound proposition "p if and only if q" is
                                    represented by the symbol p↔q.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>
                        Formulate arguments: Combine propositions and use
                        logical operators to build arguments. An argument is
                        made up of one or more premises (propositions
                        presumptively true) and a conclusion (the inferred or
                        claimed proposition). Example argument: Let's construct
                        an argument using our propositions and operators:
                    </p>
                    <div className="mockup-window border bg-base-300">
                        <div className="flex p-8 bg-base-200">
                            <ul>
                                <li>
                                    Premise 1: p ∧ q (The sun is shining and it
                                    is raining.)
                                </li>
                                <li>
                                    Premise 2: ~r (I will not go for a walk.)
                                </li>
                                <li>
                                    Conclusion: ~p (The sun is not shining.)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">Examples</h4>
                <ol className="flex flex-col gap-8">
                    <li className="flex flex-col gap-4">
                        <p>
                            1. “All cats are mammals and a tiger is a cat, so a
                            tiger is a mammal”
                        </p>
                        <div className="mockup-code">
                            <pre data-prefix="$">
                                <code>The premises are:</code>
                            </pre>
                            <pre data-prefix=">" className="text-warning">
                                <code>All cats are mammals</code>
                            </pre>
                            <pre data-prefix=">" className="text-warning">
                                <code>A tiger is a cat</code>
                            </pre>
                            <pre data-prefix="" className="text-warning"></pre>
                            <pre data-prefix="$">
                                <code>The conclusion is:</code>
                            </pre>
                            <pre data-prefix=">" className="text-success">
                                <code>A tiger is a mammal</code>
                            </pre>
                        </div>
                        <p>
                            The first premise is true while the second is false,
                            on the other hand, the argument is valid because it
                            still leads to a true conclusion. Therefore the
                            argument is sound because it is valid and has true
                            premises. The argument is an example of deductive
                            argument.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4">
                        <p>
                            2. "My cat has blue eyes and my friend&apos;s cat
                            has blue eyes, so cats have blue eyes."
                        </p>
                        <div className="mockup-code">
                            <pre data-prefix="$">
                                <code>The premises are:</code>
                            </pre>
                            <pre data-prefix=">" className="text-warning">
                                <code>My cat has blue eyes</code>
                            </pre>
                            <pre data-prefix=">" className="text-warning">
                                <code>My friend&apos;s cat has blue eyes</code>
                            </pre>
                            <pre data-prefix="" className="text-warning"></pre>
                            <pre data-prefix="$">
                                <code>The conclusion is:</code>
                            </pre>
                            <pre data-prefix=">" className="text-success">
                                <code>All cats have blue eyes</code>
                            </pre>
                        </div>
                        <p>
                            The first and second premises are true but the
                            conclusion is false. Therefore the argument is not
                            valid and not sound. The argument is an example of
                            an inductive argument.
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    );
};
