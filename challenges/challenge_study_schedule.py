def study_schedule(permanence_period, target_time):
    counter = 0
    if target_time:
        for entry_time, departure_time in permanence_period:
            if not entry_time or not departure_time:
                return None
            if entry_time <= target_time <= departure_time:
                counter += 1
        return counter
    return None
