import numpy as np
from scipy.optimize import linear_sum_assignment

def create_cost_matrix(vaccinator_doses, barangay_doses):
    num_vaccinators = len(vaccinator_doses)
    num_barangays = len(barangay_doses)

    # Create an empty cost matrix
    cost_matrix = np.zeros((num_vaccinators, num_barangays))

    # Populate the cost matrix with costs based on the difference in doses
    for i in range(num_vaccinators):
        for j in range(num_barangays):
            cost_matrix[i, j] = abs(vaccinator_doses[i] - barangay_doses[j])

    return cost_matrix

def schedule_supervisors(vet_sv, vaccinator_doses, barangay_doses):
    num_vets = len(vet_sv)
    num_vaccinators = len(vaccinator_doses)
    num_barangays = len(barangay_doses)

    # Calculate the total number of doses needed
    total_doses_needed = sum(barangay_doses)

    # Calculate the number of doses each vaccinator can give per day
    vaccinator_doses_per_day = sum(vaccinator_doses) / num_vets

    print(create_cost_matrix(vaccinator_doses, barangay_doses))
    # return create_cost_matrix(vaccinator_doses, barangay_doses)

    # Calculate the number of days needed to complete all doses
    num_days = int(np.ceil(total_doses_needed / (vaccinator_doses_per_day)))
    print(f"Number of days needed: {num_days}")

    # Create the cost matrix
    # cost_matrix = np.zeros((num_vets, num_vaccinators))
    # for i in range(num_vets):
    #     for j in range(num_vaccinators):
    #         cost_matrix[i, j] = abs(vet_sv[i] - vaccinator_doses[j])

    # Solve the assignment problem using the Hungarian algorithm
    row_ind, col_ind = linear_sum_assignment(create_cost_matrix(vaccinator_doses, barangay_doses))

    print(row_ind, col_ind)
    return

    # Create the schedule dictionaries
    vet_schedule = {}
    vaccinator_schedule = {}
    for i, j in zip(row_ind, col_ind):
        if i not in vet_schedule:
            vet_schedule[i] = []
        vet_schedule[i].append(j)
        vaccinator_schedule[j] = i
    
    print(vaccinator_schedule)

    # Assign remaining vaccinators to vets
    remaining_vaccinators = set(range(num_vaccinators)) - set(col_ind)
    for vaccinator in remaining_vaccinators:
        vet = min(vet_schedule.keys(), key=lambda v: sum(cost_matrix[v, j] for j in vet_schedule[v]))
        vet_schedule[vet].append(vaccinator)
        vaccinator_schedule[vaccinator] = vet

    # Sort the vaccinators assigned to each vet based on the cost
    for vet, vaccinators in vet_schedule.items():
        vaccinators.sort(key=lambda v: cost_matrix[vet, v])

    # Assign barangays to vaccinators
    vaccinator_barangay = {}
    remaining_barangays = set(range(num_barangays))
    current_day = 1
    activities_per_day = 5  # Maximum number of activities per day

    while remaining_barangays:
        available_vaccinators = set(vaccinator_schedule.keys())
        assigned_vaccinators = set(vaccinator_barangay.keys())

        for vaccinator in available_vaccinators - assigned_vaccinators:
            if len(vaccinator_barangay) % activities_per_day == 0 and len(vaccinator_barangay) > 0:
                current_day += 1
            if remaining_barangays and len(vaccinator_barangay) < num_days * activities_per_day:
                barangay = min(remaining_barangays, key=lambda b: abs(barangay_doses[b] - vaccinator_doses[vaccinator]))
                remaining_barangays.remove(barangay)
                vaccinator_barangay[vaccinator] = (barangay, current_day)
                if not remaining_barangays:
                    break

    # Print the schedule
    print("Vet Schedule:")
    for vet, vaccinators in vet_schedule.items():
        print(f"Vet {vet+1} supervises Vaccinators {', '.join(str(v+1) for v in vaccinators)}")

    print("\nVaccinator Schedule:")
    for vaccinator in vaccinator_schedule:
        (barangay, day) = vaccinator_barangay.get(vaccinator, (None, None))
        if barangay is not None and day is not None:
            print(f"Vaccinator {vaccinator+1} is assigned to Barangay {barangay+1} on Day {day}")
        else:
            print(f"Vaccinator {vaccinator+1} is not assigned to any barangay")


# Example usage
vet_sv = [1, 1, 1, 1, 1]  # Number of vaccinators each vet can supervise
vaccinator_doses = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]  # Number of doses each vaccinator can give
barangay_doses = [11758, 12092, 11709, 11715, 11826, 11753, 11721, 11714, 11795, 11691, 11811, 11759, 11955, 11783]  # Number of doses each barangay needs

schedule_supervisors(vet_sv, vaccinator_doses, barangay_doses)

